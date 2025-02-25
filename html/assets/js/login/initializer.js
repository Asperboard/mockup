/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** initializer.js
*/

function inject_submit_actions() {
    const personal = "submit";
    const professional = "submit_professional";
    if (document.getElementById("loginForm") === null) {
        console.error("No login form found");
        return;
    }
    if (document.getElementById("registerForm").querySelector('input[type="submit"]')) {
        document.getElementById("loginForm").addEventListener(personal, function (event) {
            event.preventDefault();
            log_user_in();
        });
        document.getElementById("registerForm").addEventListener(personal, function (event) {
            event.preventDefault();
            register_user();
        });
    } else {
        document.getElementById("loginForm").addEventListener(professional, function (event) {
            event.preventDefault();
            log_user_in_professional();
        });
        document.getElementById("registerForm").addEventListener(professional, function (event) {
            event.preventDefault();
            register_user_professional();
        });
    }
}

// Add a a rule to only run once the page is loaded
document.addEventListener("DOMContentLoaded", inject_submit_actions);
