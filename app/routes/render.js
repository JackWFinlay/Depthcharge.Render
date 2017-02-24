// render.js
var express = require('express');
var router 	= express.Router();
var jsdom   = require("jsdom").jsdom;

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.post('/render', function(req, res) {
	let html = req.body.htmlBody;
    let doc = jsdom(html, {});
    let window = doc.defaultView;
    var renderedHtml = "";
    window.addEventListener('load', function(event){
        console.log("loaded");
        renderedHtml = window.document.documentElement.outerHTML;
        console.log("renderedHTML: " + renderedHtml);
        res.send(renderedHtml);
    });
    
});

module.exports = router;