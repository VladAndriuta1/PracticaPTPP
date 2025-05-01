document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const buttonText = loginButton.querySelector('.button-text');
    const spinner = document.getElementById('loginSpinner');

    // Afișare/ascundere parolă
    const togglePassword = document.querySelector('#toggleParola');
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        const eyeIcon = document.getElementById('eye-icon');
        eyeIcon.classList.toggle('fa-eye');
        eyeIcon.classList.toggle('fa-eye-slash');
    });

    // Afișare încărcare
    function showLoading() {
        buttonText.style.display = 'none';
        spinner.style.display = 'block';
        loginButton.disabled = true;
    }

    function hideLoading() {
        buttonText.style.display = 'block';
        spinner.style.display = 'none';
        loginButton.disabled = false;
    }

    // Mesaje eroare
    function showError(inputId, message) {
        const errorElement = document.getElementById(`${inputId}-error`);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(inputId) {
        const errorElement = document.getElementById(`${inputId}-error`);
        errorElement.style.display = 'none';
    }

    // Redirecționare către cont
    function redirectToCont() {
        window.location.href = '../continut/cont.html';
    }

    // Trimitere formular
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Resetare erori
        hideError('username');
        hideError('password');

        let isValid = true;
        const usernameVal = usernameInput.value.trim();
        const passwordVal = passwordInput.value;

        // Validare câmpuri
        if (!usernameVal) {
            showError('username', 'Introduceți numele de utilizator sau email-ul');
            isValid = false;
        }

        if (!passwordVal) {
            showError('password', 'Introduceți parola');
            isValid = false;
        } else {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&+=;:,]).{8,}$/;
            if (!passwordPattern.test(passwordVal)) {
                showError('password', 'Parola trebuie să aibă cel puțin 8 caractere, o literă mică, una mare, o cifră și un simbol (!@#$%&+=;:,).');
                isValid = false;
            }
        }

        if (!isValid) return;

        showLoading();

        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // simulare întârziere

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u =>
                (u.username === usernameVal || u.email === usernameVal) &&
                u.password === passwordVal
            );

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                redirectToCont();
            } else {
                showError('username', 'Nume de utilizator sau parolă incorectă');
                hideLoading();
            }
        } catch (error) {
            showError('username', 'A apărut o eroare. Vă rugăm să încercați din nou.');
            hideLoading();
        }
    });
});