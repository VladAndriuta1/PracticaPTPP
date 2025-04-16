document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
    
    if (!isAuthenticated || !user) {
        // Redirect to login page if not authenticated
        window.location.href = '../../autentificare/auth.html';
        return;
    }
    
    // Populate user data
    document.getElementById('user-name').textContent = user.username || 'Nume Utilizator';
    document.getElementById('user-email').textContent = user.email || 'email@example.com';
    
    // Edit profile functionality
    const editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
        // Create edit form for username and email
        const userNameElement = document.getElementById('user-name');
        const userEmailElement = document.getElementById('user-email');
        
        const userName = userNameElement.textContent;
        const userEmail = userEmailElement.textContent;
        
        // Create input fields
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = userName;
        nameInput.className = 'edit-input';
        nameInput.id = 'edit-username';
        
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.value = userEmail;
        emailInput.className = 'edit-input';
        emailInput.id = 'edit-email';
        
        // Replace text with inputs
        userNameElement.textContent = '';
        userNameElement.appendChild(nameInput);
        
        userEmailElement.textContent = '';
        userEmailElement.appendChild(emailInput);
        
        // Change button to save
        editBtn.innerHTML = '<i class="fas fa-save"></i> Salvează';
        editBtn.classList.add('saving');
        
        // Change onclick to save function
        editBtn.onclick = function() {
            saveProfileChanges();
        };
    });
    
    function saveProfileChanges() {
        const username = document.getElementById('edit-username').value;
        const email = document.getElementById('edit-email').value;
        
        // Update user data
        const updatedUser = { ...user };
        updatedUser.username = username;
        updatedUser.email = email;
        
        // Save to storage
        if (localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
            sessionStorage.setItem('user', JSON.stringify(updatedUser));
        }
        
        // Refresh page to show updated data
        location.reload();
    }
    
    // Change password functionality
    const changePasswordBtn = document.querySelector('.change-password-btn');
    changePasswordBtn.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Schimbă Parola</h2>
                <form id="change-password-form">
                    <div class="form-group">
                        <label for="current-password">Parola Actuală</label>
                        <input type="password" id="current-password" required>
                    </div>
                    <div class="form-group">
                        <label for="new-password">Parola Nouă</label>
                        <input type="password" id="new-password" required>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirmă Parola Nouă</label>
                        <input type="password" id="confirm-password" required>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Anulează</button>
                        <button type="submit" class="save-btn">Salvează</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Handle form submission
        const form = modal.querySelector('#change-password-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (newPassword !== confirmPassword) {
                alert('Parolele noi nu coincid!');
                return;
            }
            
            // Here you would typically make an API call to change the password
            alert('Parola a fost schimbată cu succes!');
            modal.remove();
        });
        
        // Handle cancel button
        const cancelBtn = modal.querySelector('.cancel-btn');
        cancelBtn.addEventListener('click', function() {
            modal.remove();
        });
    });
    
    // Avatar edit functionality
    const avatarEditBtn = document.querySelector('.avatar-edit');
    avatarEditBtn.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';
        
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('user-avatar').src = e.target.result;
                    // Here you would typically upload the image to a server
                };
                reader.readAsDataURL(file);
            }
        });
        
        input.click();
    });
    
    // Disconnect functionality
    const disconnectBtns = document.querySelectorAll('#disconnect-btn, #profile-disconnect-btn');
    disconnectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            handleDisconnect();
        });
    });
    
    function handleDisconnect() {
        if (confirm('Sunteți sigur că doriți să vă deconectați?')) {
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
            window.location.href = '../../autentificare/auth.html';
        }
    }
}); 