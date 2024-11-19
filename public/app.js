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
        msgInput.value =""
    }
})

socket.on('chat message' , (msg)=>{
    const msgbody = document.createElement('div')
    msgbody.textContent= msg;
    chatDisplay.appendChild(msgbody)
})
