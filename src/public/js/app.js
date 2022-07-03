// FE 영역
const socket = new WebSocket(`ws://${window.location.host}`);
// socket응 이용해 be로 메세지 연결

socket.addEventListener("open", () => {
    console.log("Connected to server ✓");
});

socket.addEventListener("message", (message) => {
    console.log("New message", message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconneted to server ❌");
});

setTimeout(() => {
    socket.send("hello from the browser!");
}, 10000);