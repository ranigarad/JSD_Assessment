const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', function(userName) {
  rl.close();
  console.log(`Hello, ${userName}!`);
});
