const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('We are successfully connected')
    // code that does something when the connection is first established
  });
  return conn;
};

console.log("Connecting ...");
connect();

