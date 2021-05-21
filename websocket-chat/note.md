# Socket.IO

## Socket.IO の中心となる考え方

- [Socket.IO: Get Started - Write a simple chat application](https://socket.io/get-started/chat)

Socket.IO の背後にあるメインアイディアは、イベントの送受信ができること、そして、それに伴うデータの送受信ができることである。JSON にエンコードされ得るあらゆるオブジェクトやバイナリデータの送受信をサポートしている。

> The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

- 非同期かつ双方向のイベントプッシュ
- client --- event emit ---> server
- server --- event emit ---> client
