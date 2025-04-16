document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const buttonText = loginButton.querySelector('.button-text');
    const spinner = document.getElementById('loginSpinner');

    // Toggle password visibility
    const togglePassword = document.querySelector('#toggleParola');
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        const eyeIcon = document.getElementById('eye-icon');
        eyeIcon.classList.toggle('fa-eye');
        eyeIcon.classList.toggle('fa-eye-slash');
    });

    // Show/hide loading state
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

    // Show/hide error message
    function showError(inputId, message) {
        const errorElement = document.getElementById(`${inputId}-error`);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(inputId) {
        const errorElement = document.getElementById(`${inputId}-error`);
        errorElement.style.display = 'none';
    }

    // Function to redirect to cont.html
    function redirectToCont() {
        window.location.href = '../continut/cont.html';
    }

    // Handle form submission
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Reset previous errors
        hideError('username');
        hideError('password');

        // Validate inputs
        let isValid = true;
        if (!usernameInput.value.trim()) {
            showError('username', 'Introduceți numele de utilizator sau email-ul');
            isValid = false;
        }
        if (!passwordInput.value) {
            showError('password', 'Introduceți parola');
            isValid = false;
        }

        if (!isValid) return;

        showLoading();

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Find user by username/email and password
            const user = users.find(u => 
                (u.username === usernameInput.value || u.email === usernameInput.value) && 
                u.password === passwordInput.value
            );

            if (user) {
                // Store user session
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // Redirect to cont.html
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

    // Add click event listener to the login button
    loginButton.addEventListener('click', function(event) {
        // If the form is valid, redirect to cont.html
        if (usernameInput.value.trim() && passwordInput.value) {
            redirectToCont();
        }
    });
});
