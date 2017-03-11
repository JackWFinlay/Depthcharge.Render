// render.js
var express           = require('express');
var router            = express.Router();
var jsdom             = require("jsdom").jsdom;
var serializeDocument = require("jsdom").serializeDocument;
var request           = require("request");

router.get('/render', function (req, res) {
    let url = req.header('url');

    let render = new Promise(function (resolve, reject) {
        let html = getHTML(url);
        resolve(html);
    });

    render.then((html) => getRenderedHtmlAsync(html))
        .then((renderedHtml) => res.send(renderedHtml));
});

function getHTML(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            resolve(body);
        });
    });
}

function getRenderedHtmlAsync(html) {
    return new Promise(function (resolve, reject) {
        let doc = jsdom(html, {});
        let window = doc.defaultView;
        window.addEventListener('load', function (event) {
            let renderedHtml = serializeDocument(window.document);
            resolve(renderedHtml);
        })
    })
};  

module.exports = router;