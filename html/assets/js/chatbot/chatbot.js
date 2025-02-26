/*
** EPITECH PROJECT, 2024
** mockup
** File description:
** chatbot.js
*/

console.log("js/chatbot initialising");

function toggleSpero() {
    const bubble = document.getElementById("speroBubble");
    bubble.style.display = bubble.style.display === "none" ? "block" : "none";
}

function chatbotInjector() {
    const section = document.getElementById("chatbot_instance");
    if (!section) {
        console.error("Chatbot section not found.");
        return;
    }
    section.innerHTML = `<div class="chatbotBuble talk-bubble tri-right round btm-right-in" id="speroBubble" style="display: none;">
        <div class="talktext">
            <p>Bonjour, je suis Spero, comment puis-je vous aider aujourd&#39;hui?</p>
            <br>
            <div style="display: flex;"><input type="text" placeholder="Écrire à Spéro..." /><button class="button_desing"><i class="fas fa-paper-plane"></i></button></div>
        </div>
    </div>`;
    section.innerHTML += `<div class="chatbotButton"><button onclick="><img src="AB logo.png" width="50" height="49" /></button></div>`;
}

document.addEventListener("DOMContentLoaded", chatbotInjector);

console.log("js/chatbot finished");
