const PDFDocument = require('PDFKit');
const fs = require('fs');
const catFacts = require('cat-facts');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('./cat-facts'));
doc.text(catFacts.random(), 100, 100);
doc.end();
