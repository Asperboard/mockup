/*
** EPITECH PROJECT, 2024
** mockup
** File description:
** cookies.js
*/

const cookie_consent_cookie_name = 'cookie_consent';

function inject_cookie_banner(ID = 'cookie_banner') {
    const banner = document.createElement('div');
    banner.id = ID;
    banner.classList.add("cookie-banner");
    banner.classList.add("style_popup_banner_container");
    banner.innerHTML = `
        <p>This website uses cookies to ensure you get the best experience on our website.</p>
        <button onclick="acceptCookies(this)">Accept</button>
    `;
    document.body.appendChild(banner);
}

function acceptCookies(element) {
    element.parentElement.style.display = 'none';
    window.cookie_manager.createCookie(cookie_consent_cookie_name, 'true', 365);
}

async function inject_banner() {
    const id = "cookie_banner";
    let maxTries = 10;

    while (maxTries > 0) {
        if (window.cookie_manager) {
            break;
        }
        await sleep(1000);
        maxTries--;
    }

    if (!window.cookie_manager) {
        console.error("cookie_manager module is still missing after multiple retries.");
        return;
    }
    const cookie_accepted = window.cookie_manager.readCookie(cookie_consent_cookie_name);
    console.log("cookie_accepted: '", cookie_accepted, "'");
    if (cookie_accepted === "" && document.getElementById(id) !== null) {
        console.log("Cookie not accepted");
        inject_cookie_banner(id);
    } else {
        console.log("Cookie already accepted");
    }
}

document.addEventListener("DOMContentLoaded", inject_banner);
