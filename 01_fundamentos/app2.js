const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const newData = data.replace(/React/ig, 'Node');

fs.writeFileSync('README-NODE.md', newData);
