function afiseazaParola() {
  const parola = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");

  if (parola.type === "password") {
    parola.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    parola.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

// Function to generate a unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Function to get current date in ISO format
function getCurrentDate() {
  return new Date().toISOString();
}

function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    alert("Te rugăm să completezi toate câmpurile!");
    return false;
  }

  // Check if username or email already exists
  const existingUsers = localStorage.getItem('users');
  if (existingUsers) {
    const users = JSON.parse(existingUsers);
    if (users.some(user => user.username === username)) {
      alert("Acest nume de utilizator este deja în uz!");
      return false;
    }
    if (users.some(user => user.email === email)) {
      alert("Această adresă de email este deja în uz!");
      return false;
    }
  }

  // Create a simple user object
  const user = {
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toISOString()
  };

  // Save the user
  let users = [];
  if (existingUsers) {
    users = JSON.parse(existingUsers);
  }
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Set the current user
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  alert("Cont creat cu succes! Veți fi redirecționat către pagina de autentificare.");
  
  // Redirect to the authentication page
  window.location.href = "../autentificare/auth.html";
  
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');

    // Password strength indicator
    const strengthIndicator = document.createElement('div');
    strengthIndicator.className = 'password-strength';
    passwordInput.parentNode.insertBefore(strengthIndicator, passwordInput.nextSibling);

    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('active');
    });

    // Show/hide loading state
    function showLoading() {
        const submitBtn = registrationForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Se procesează...';
    }

    function hideLoading() {
        const submitBtn = registrationForm.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Înregistrare';
    }

    // Show/hide error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        formGroup.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        formGroup.classList.remove('error');
        errorElement.style.display = 'none';
    }

    // Check password strength
    function checkPasswordStrength(password) {
        let strength = 0;
        const feedback = [];

        if (password.length >= 8) strength++;
        else feedback.push('Parola trebuie să aibă cel puțin 8 caractere');

        if (password.match(/[a-z]/)) strength++;
        else feedback.push('Adăugați litere mici');

        if (password.match(/[A-Z]/)) strength++;
        else feedback.push('Adăugați litere mari');

        if (password.match(/[0-9]/)) strength++;
        else feedback.push('Adăugați cifre');

        if (password.match(/[^a-zA-Z0-9]/)) strength++;
        else feedback.push('Adăugați caractere speciale');

        return { strength, feedback };
    }

    // Update password strength indicator
    passwordInput.addEventListener('input', function() {
        const { strength, feedback } = checkPasswordStrength(this.value);
        const strengthText = ['Foarte slabă', 'Slabă', 'Medie', 'Puternică', 'Foarte puternică'][strength - 1] || '';
        const strengthClass = ['very-weak', 'weak', 'medium', 'strong', 'very-strong'][strength - 1] || '';
        
        strengthIndicator.textContent = strengthText;
        strengthIndicator.className = 'password-strength ' + strengthClass;
        
        if (this.value) {
            strengthIndicator.style.display = 'block';
        } else {
            strengthIndicator.style.display = 'none';
        }
    });

    // Handle form submission
    registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Reset previous errors
        hideError(usernameInput);
        hideError(emailInput);
        hideError(passwordInput);
        hideError(confirmPasswordInput);

        // Validate inputs
        let isValid = true;

        if (!usernameInput.value.trim()) {
            showError(usernameInput, 'Introduceți numele de utilizator');
            isValid = false;
        }

        if (!emailInput.value.trim()) {
            showError(emailInput, 'Introduceți adresa de email');
            isValid = false;
        } else if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showError(emailInput, 'Introduceți o adresă de email validă');
            isValid = false;
        }

        if (!passwordInput.value) {
            showError(passwordInput, 'Introduceți parola');
            isValid = false;
        } else {
            const { strength, feedback } = checkPasswordStrength(passwordInput.value);
            if (strength < 3) {
                showError(passwordInput, 'Parola este prea slabă: ' + feedback.join(', '));
                isValid = false;
            }
        }

        if (!confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Confirmați parola');
            isValid = false;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Parolele nu coincid');
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            alert('Trebuie să acceptați termenii și condițiile');
            isValid = false;
        }

        if (!isValid) return;

        showLoading();

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const userData = {
                username: usernameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value,
                fullName: '',
                phone: '',
                address: '',
                language: 'ro',
                notifications: true,
                createdAt: new Date().toISOString()
            };

            const success = window.userManager.registerUser(userData);

            if (success) {
                alert('Contul a fost creat cu succes! Vă puteți autentifica acum.');
                window.location.href = '../autentificare/auth.html';
            } else {
                showError(usernameInput, 'Numele de utilizator sau email-ul este deja în uz');
            }
        } catch (error) {
            showError(usernameInput, 'A apărut o eroare. Vă rugăm să încercați din nou.');
        } finally {
            hideLoading();
        }
    });
});
