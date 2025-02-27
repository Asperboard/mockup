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
    let finalHTML = "<div class='chatBotAbstraction'>";
    finalHTML += `<div class="chatbotBuble talk-bubble tri-right round btm-right-in" id="speroBubble" style="display: none;">
        <div class="talktext">
            <p>Bonjour, je suis Spero, comment puis-je vous aider aujourd&#39;hui?</p>
            <br>
            <div style="display: flex;gap: 2px;">
                <input type="text" placeholder="Écrire à Spéro..." style="width:138px;"/>
                <button class="button_desing" style="width:40px">
                    <i class="fas fa-paper-plane" style="color: #fff;">
                        <!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">-->
                        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <!--<path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>-->
                    </i>
                </button>
            </div>
        </div>
    </div>`;
    finalHTML += `<div class="chatbotButton"><button onclick="toggleSpero()"><img src="assets/img/AB-logo.png" width="50" height="49" /></button></div>`;
    finalHTML += "</div>";
    section.innerHTML = finalHTML;
    console.log("chatbotInjector finished");
}

document.addEventListener("DOMContentLoaded", chatbotInjector);

console.log("js/chatbot finished");
