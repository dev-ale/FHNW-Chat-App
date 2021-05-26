const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

describe("Socket.io", () => {
  let io, serverSocket, clientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("Join Room", (done) => {
    var roomAndUser = { username: "Max", room: "Raum1" };
    clientSocket.on("joinRoom", ({ username, room }) => {
      expect({ username, room }).toStrictEqual(roomAndUser);
      done();
    });
    serverSocket.emit("joinRoom", roomAndUser);
  });

  test("Send Message", (done) => {
    clientSocket.on("message", (msg) => {
      expect(msg).toBe("Test Nachricht");
      done();
    });
    serverSocket.emit("message", "Test Nachricht");
  });
});
