const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.0.236',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    
    conn.write("Name: SCC");
    // setInterval(() => {
    //   conn.write("Move: up");
    // },500);
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: right");
  });

  return conn;
};

module.exports = {connect};