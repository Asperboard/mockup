/*
** EPITECH PROJECT, 2024
** mockup
** File description:
** inject_test_widget_emotions.js
*/

function getTestWidgetEmotions() {
    const element = `
    <div class="container">
        <h1>Quiz des Émotions</h1>

        <!-- Quiz Section -->
        <div id="game">
            <h2>Quelle est cette émotion ?</h2>
            <p id="question-text"></p>
            <div id="answers-container"></div>
            <p id="feedback"></p>
            <button id="next-btn">Suivant</button>
            <button id="play-again-btn" style="display: none;">Rejouer</button>
        </div>
    </div>
    `;
    return element;
}


function getIframeOfTheGame() {
    // URL for the iframe (can be dynamically set as needed)
    var iframeUrl = `${window.location.origin}${checkHtmlPath()}/games`;
    const button = document.createElement("button");
    button.onclick = function () {
        window.open(iframeUrl, '_blank', 'width=600,height=400');
    }
    button.textContent = "Jeux des émotions";
    return button;

}

function encapsulateWidget() {
    const widget = document.createElement("div");
    widget.id = "test-widget-emotions";
    widget.classList.add("widget");
    widget.innerHTML = getTestWidgetEmotions();
    return widget;
}

function injectTestWidgetEmotions(element) {
    element.innerHTML = encapsulateWidget();
}
