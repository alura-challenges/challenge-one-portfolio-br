document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact__form");

    form.addEventListener("submit", function(event) {
        let isValid = true;
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const assunto = document.getElementById("assunto");
        const mensagem = document.getElementById("mensagem");

        // Reset previous error messages
        clearErrorMessages();

        // Validate Nome
        if (nome.value.trim() === "") {
            showError(nome, "O nome é obrigatório.");
            isValid = false;
        }

        // Validate Email
        if (email.value.trim() === "") {
            showError(email, "O email é obrigatório.");
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, "Por favor, insira um email válido.");
            isValid = false;
        }

        // Validate Assunto
        if (assunto.value.trim() === "") {
            showError(assunto, "O assunto é obrigatório.");
            isValid = false;
        }

        // Validate Mensagem
        if (mensagem.value.trim() === "") {
            showError(mensagem, "A mensagem é obrigatória.");
            isValid = false;
        }

        // Prevent form submission if there are validation errors
        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
    }

    function clearErrorMessages() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(function(error) {
            error.remove();
        });
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
//Seu JavaScript de validação aqui