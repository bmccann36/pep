
const chalk = require('chalk')
var fs = require('fs');

const table = require('./index').newData


fs.writeFile('./cookieTable2.js', JSON.stringify(table, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(chalk.magenta('File has been created'));
});

