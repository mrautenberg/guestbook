// DATE FNS LIBRARY

// Variables
const name = document.querySelector("#name");
const message = document.querySelector("#message");
const messageList = document.querySelector(".message-list");
const submitBtn = document.querySelector("#submit-btn");

// Functions

function addMessage(e) {
    e.preventDefault();

    // Add datetime somehow!
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // Input values from form fields
    const input = `${name.value}: ${message.value} (${day}/${month} at ${hour}:${minutes}) `;

    // creating a new LI
    const newMessage = document.createElement("li");
    newMessage.innerText = input;
    newMessage.classList.add("new-message");

    // Append new message to list of messages
    messageList.appendChild(newMessage);

    // Clear input fields
    name.value = "";
    message.value = "";

    console.log(newMessage);
}

// Event Listeners
submitBtn.addEventListener("click", addMessage);
