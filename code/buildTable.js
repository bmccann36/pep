
const chalk = require('chalk')
var fs = require('fs');

const table = require('./table').table // all we care about is the data portion


fs.writeFile('./cookieTable.js', JSON.stringify(table, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(chalk.magenta('File has been created'));
});

