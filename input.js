const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    console.log('move up');
  } else if (key === 'a') {
    console.log("left");
  } else if (key === 's') {
    console.log("down");
  } else if (key === 'd') {
    console.log("right");
  }
};

module.exports = { setupInput };