const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split('').length;

const word = content.split('');

const contentUpper = content.toUpperCase();

const text = contentUpper.split(' ');

const react = text.filter(palabra => palabra.includes('JS'));

const countReact = react.length;


console.log(react, countReact);