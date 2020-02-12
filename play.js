const { connect } = require('./client');


const setupInput = function() {
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  };

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


setupInput();

console.log('Connecting ...');
connect();