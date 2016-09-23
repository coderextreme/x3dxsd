"use strict";

var parseString = require('xml2js').parseString;
var fs = require('fs');

process.argv.shift();
process.argv.shift();

var files = process.argv;

var xml = fs.readFileSync(files[0]);
parseString(xml, function(err, result) {
	if (err) throw "FILE "+err;
	fs.writeFileSync(files[1], JSON.stringify(result, null, 2));
});
