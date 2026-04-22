// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "admin@admin.com" && password === "1234") {
            document.getElementById("mensaje").innerText = "Login exitoso";
        } else {
            document.getElementById("mensaje").innerText = "Datos incorrectos";
        }
    });
}


// ENVIAR DINERO
const moneyForm = document.getElementById("moneyForm");

if (moneyForm) {
    moneyForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const destinatario = document.getElementById("destinatario").value;
        const monto = document.getElementById("monto").value;

        document.getElementById("resultado").innerText =
            "Se enviaron $" + monto + " a " + destinatario;
    });
}