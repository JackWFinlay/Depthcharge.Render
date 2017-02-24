// render.js
var express           = require('express');
var router            = express.Router();
var jsdom             = require("jsdom").jsdom;
var serializeDocument = require("jsdom").serializeDocument;

router.post('/render', function(req, res) {
	let html = req.body.htmlBody;
    let doc = jsdom(html, {});
    let window = doc.defaultView;
    window.addEventListener('load', function(event){
        let renderedHtml = serializeDocument(window.document);
        sendResponse(res, renderedHtml);  
    });  
});

function sendResponse(res, renderedHtml) {
    res.send(renderedHtml);
}

module.exports = router;