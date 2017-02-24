// render.js
var express = require('express');
var router 	= express.Router();
var jsdom   = require("jsdom").jsdom;

router.post('/render', function(req, res) {
    console.log('html: ' + req.body.htmlBody);
	let html = req.body.htmlBody;
    let doc = jsdom(html, {});
    let window = document.defaultView;
    var renderedHtml;
    window.addEventListener('load', function(event){
        renderedHtml = window.document.documentElement.outerHTML;
    });
    res.body.renderedHtml = renderedHtml;
    res.send();
});

module.exports = router;