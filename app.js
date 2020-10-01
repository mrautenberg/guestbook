// Variables
const name = document.querySelector("#name");
const message = document.querySelector("#message");
const messageList = document.querySelector(".message-list");
const submitBtn = document.querySelector("#submit-btn");

// Functions
const addMessage = (e) => {
    e.preventDefault();

    // Time since posted with DateFns
    const now = new Date();
    const before = new Date("Oct 1 2020 10:00:00");
    const timeSince = dateFns.distanceInWords(now, before, { addSuffix: true });
    console.log(timeSince);

    // Check if empty to not sign out empty string!

    // Input values from form fields
    const html = `
    ${name.value} wrote: ${message.value} (${timeSince}) 
  `;

    // creating a new LI
    const newMessage = document.createElement("li");
    newMessage.innerText = html;
    newMessage.classList.add("new-message");

    // Append new message to list of messages
    messageList.appendChild(newMessage);

    // Clear input fields
    name.value = "";
    message.value = "";

    console.log(newMessage);
};

// Also possible to add to local storage

// Event Listeners
submitBtn.addEventListener("click", addMessage);
