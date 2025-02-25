/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** log_user_in.js
*/

async function log_user_in() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await window.update_server.login(email, password);

    console.log(`login: JSON response: ${JSON.stringify(response)}`);

    if (response.ok) {
        console.log("Login successful:", response);
        // window.location.pathname = window.constants.dashboard_page;
        window.location.pathname = "/user/dashboard";
    } else {
        update_error_message("Login failed: " + response.message);
    }
}

async function log_user_in_professional() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await window.update_server.login_professional(email, password);

    console.log(`login: JSON response: ${JSON.stringify(response)}`);

    if (response.ok) {
        console.log("Login successful:", response);
        // window.location.pathname = window.constants.dashboard_page;
        window.location.pathname = "/dashboard/pro/suivi";
    } else {
        update_error_message("Login failed: " + response.message);
    }
}
