let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', key => handleUserInput(key));
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  console.log("key is ", key);
  if (key === '\u0003') {
    process.exit();
  }
  console.log(key=== 'w')
  if (key === 'w') {
    console.log("UP")
    connection.write("Move: up");
  }
  if (key === 'a') {
    console.log("LEFT")
    connection.write("Move: left")
    
  }
  if (key === 's') {
    console.log("DOWN")
    connection.write("Move: down")
  }
  if (key === 'd') {
    console.log("RIGHT")
    connection.write("Move: right");
  }
};

module.exports = { setupInput };