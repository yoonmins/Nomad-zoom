// FE 영역
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const socket = new WebSocket(`ws://${window.location.host}`);
// socket응 이용해 be로 메세지 연결

socket.addEventListener("open", () => {
    console.log("Connected to server ✓");
});

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
});

socket.addEventListener("close", () => {
    console.log("Disconneted to server ❌");
});


function handleSubmit(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value ="";
}

messageForm.addEventListener("submit", handleSubmit);

