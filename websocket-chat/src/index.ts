const express = require('express');
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// http
app.get('/', (req: any, res: any) => {
  res.status(200).sendFile(__dirname + '/index.html');
})

app.get('/health', (req: any, res: any) => {
  res.status(200).send('OK');
})

server.listen(8000, () => {
  console.log(__dirname);
  
  console.log('listening on localhost:8000');
})

// websocket
io.on('connection', (socket: any) => {
  console.log('a user connected');
  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
  socket.on('CAUTION', () => {
    io.emit('chat message', 'CAUTION: Someone is imposter...');
  });

  socket.on('chat message', (msg: string) => {
    console.log('message:', msg);
    io.emit('chat message', msg);
  });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets