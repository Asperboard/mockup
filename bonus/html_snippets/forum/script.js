/*
** EPITECH PROJECT, 2024
** mockup
** File description:
** script.js
*/

function generateSentMessage(message) {
    const receiverMessage = document.createElement("div");
    receiverMessage.classList.add("talk-bubble", "sender", "tri-right", "right-top");
    const talkText = document.createElement("div");
    talkText.classList.add("talktext");
    const messageField = document.createElement("p");
    messageField.textContent = message;
    talkText.appendChild(messageField);
    receiverMessage.appendChild(talkText);
    return receiverMessage;
}

function generateReceivedMessage(message) {
    const receiverMessage = document.createElement("div");
    receiverMessage.classList.add("talk-bubble", "receiver", "tri-right", "left-top");
    const talkText = document.createElement("div");
    talkText.classList.add("talktext");
    const messageField = document.createElement("p");
    messageField.textContent = message;
    talkText.appendChild(messageField);
    receiverMessage.appendChild(talkText);
    return receiverMessage;
}

function beautifyMessage(message, sender, name, icon) {
    const receiverMessage = document.createElement("div");
    const metaData = document.createElement("div");
    const nameElem = document.createElement("p");

    receiverMessage.classList.add("message-box");

    nameElem.textContent = name;
    nameElem.classList.add(sender ? "sender-text" : "receiver-text");  // This handles left or right alignment

    metaData.appendChild(nameElem);
    if (icon) {
        const iconElement = document.createElement("img");
        iconElement.src = icon;
        iconElement.style.width = '30px'; // You can adjust the icon size here
        metaData.appendChild(iconElement);
    }

    receiverMessage.appendChild(metaData);

    if (sender) {
        receiverMessage.appendChild(generateSentMessage(message));
    } else {
        receiverMessage.appendChild(generateReceivedMessage(message));
    }

    return receiverMessage;
}

function injectChatLog() {
    const chatLog = document.getElementById("chat-info");
    const messages = [
        { "sender": false, "name": "Bot", "icon": "", "message": "Bonjour, comment puis-je vous aider ?" },
        { "sender": true, "name": "User", "icon": "", "message": "Bonjour, j'ai un problème avec mon compte" },
        { "sender": false, "name": "Bot", "icon": "", "message": "Pouvez-vous me donner votre adresse mail ?" },
    ];
    messages.forEach((message) => {
        chatLog.appendChild(beautifyMessage(message.message, message.sender, message.name, message.icon));
    });
}

document.addEventListener("DOMContentLoaded", injectChatLog);
