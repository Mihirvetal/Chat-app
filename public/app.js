const socket = io();

const userInput = document.getElementById("username")
const msgInput  = document.getElementById("message")
const sendBtn = document.getElementById("send")
const chatDisplay = document.getElementById("message-container")

sendBtn.addEventListener("click", ()=>{
    const username = userInput.value.trim()
    const message  = msgInput.value.trim()

    if (username && message){
        socket.emit('chat message', `${username} : ${message}`)
    }
})
