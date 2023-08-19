const http = require('http');
const {Server} = require ('socket.io')
const PORT = process.env.PORT || 5000;


const httpServer = http.createServer(() => { });

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
})
io.on("connection", (socket) => {
    console.log('Connection established')
    io.emit ("EVENT_FOR_ALL",  "Hello everyone from server") //action for all (name, payload)
    socket.emit("EVENT_FOR_ITSELF", "Hello i'm establoshed a connection with you");
    socket.broadcast.emit("EVENT_FOR_OTHER", "New socket is connect")

    socket.on("EVENT_FROM_CLIENT", (payload) => {
        console.log('payload from client', payload);
        socket.broadcast.emit("SOME_EVENT_ON_SOME_SOCKET",  "Event on some socket")
    });
})

httpServer.listen (PORT, () => console.log(`Server is listening http://localhost:${PORT}`))