import { io } from "socket.io-client";

const socket = io("http://localhost:5000")

// socket.on(
//     "event", (payload)=> {}
// ) подписка на событие

// socket.emit ("event", payload) генерация события

socket.on("EVENT_FOR_ALL", payload => { console.log('payload', payload) });

socket.on("EVENT_FOR_ITSELF", payload => console.log('payload for self', payload));

socket.on("EVENT_FOR_OTHER", payload => console.log('Payload for other', payload));

socket.emit("EVENT_FROM_CLIENT", "Hello from client");

socket.on("SOME_EVENT_ON_SOME_SOCKET", (payload) =>
  console.log("SOME_EVENT_ON_SOME_SOCKET", payload)
);