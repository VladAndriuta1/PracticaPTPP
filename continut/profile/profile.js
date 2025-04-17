document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    let user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
    
    // If no user in storage, try to load from JSON file
    if (!user) {
        fetch('../data/users.json')
            .then(response => response.json())
            .then(data => {
                // For demo purposes, use the first user
                if (data.users && data.users.length > 0) {
                    user = data.users[0];
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('isAuthenticated', 'true');
                    populateUserData(user);
                } else {
                    // Redirect to login page if no users found
                    window.location.href = '../../autentificare/auth.html';
                }
            })
            .catch(error => {
                console.error('Error loading user data:', error);
                // Redirect to login page if fetch fails
                window.location.href = '../../autentificare/auth.html';
            });
    } else {
        // User already in storage, populate data
        populateUserData(user);
    }
    
    // Function to populate user data in the UI
    function populateUserData(user) {
        document.getElementById('user-name').textContent = user.username || 'Nume Utilizator';
        document.getElementById('user-email').textContent = user.email || 'email@example.com';
        document.getElementById('user-role').textContent = user.role || 'Membru';
        document.getElementById('user-fullname').textContent = user.fullName || 'Nume Prenume';
        document.getElementById('user-phone').textContent = user.phone || '+373 22 123 456';
        document.getElementById('user-address').textContent = user.address || 'Chișinău, Moldova';
        document.getElementById('user-registration-date').textContent = user.registrationDate || '01.01.2023';
        
        // Set avatar if available
        if (user.avatar) {
            document.getElementById('user-avatar').src = user.avatar;
        }
    }
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Edit profile functionality
    const editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
        if (editBtn.classList.contains('saving')) {
            saveProfileChanges();
            return;
        }
        
        // Create edit form for all user fields
        const userFields = [
            { id: 'user-name', label: 'Nume Utilizator', type: 'text' },
            { id: 'user-email', label: 'Email', type: 'email' },
            { id: 'user-fullname', label: 'Nume Complet', type: 'text' },
            { id: 'user-phone', label: 'Telefon', type: 'tel' },
            { id: 'user-address', label: 'Adresa', type: 'text' }
        ];
        
        // Create edit form
        const editForm = document.createElement('form');
        editForm.id = 'edit-profile-form';
        editForm.className = 'edit-form';
        
        userFields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            
            const label = document.createElement('label');
            label.htmlFor = `edit-${field.id.replace('user-', '')}`;
            label.textContent = field.label;
            
            let input;
            
            if (field.type === 'select') {
                input = document.createElement('select');
                field.options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    if (document.getElementById(field.id).textContent === option) {
                        optionElement.selected = true;
                    }
                    input.appendChild(optionElement);
                });
            } else if (field.type === 'toggle') {
                const toggleContainer = document.createElement('div');
                toggleContainer.className = 'toggle-container';
                
                input = document.createElement('input');
                input.type = 'checkbox';
                input.id = `edit-${field.id.replace('user-', '')}`;
                input.className = 'toggle-input';
                input.checked = document.getElementById(field.id).textContent === 'Activate';
                
                const toggleSlider = document.createElement('span');
                toggleSlider.className = 'toggle-slider';
                
                toggleContainer.appendChild(input);
                toggleContainer.appendChild(toggleSlider);
                
                formGroup.appendChild(label);
                formGroup.appendChild(toggleContainer);
                editForm.appendChild(formGroup);
                return;
            } else {
                input = document.createElement('input');
                input.type = field.type;
                input.value = document.getElementById(field.id).textContent;
            }
            
            input.id = `edit-${field.id.replace('user-', '')}`;
            input.className = 'edit-input';
            
            formGroup.appendChild(label);
            formGroup.appendChild(input);
            editForm.appendChild(formGroup);
        });
        
        // Create form actions
        const formActions = document.createElement('div');
        formActions.className = 'form-actions';
        
        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Anulează';
        cancelBtn.onclick = function() {
            location.reload();
        };
        
        formActions.appendChild(cancelBtn);
        editForm.appendChild(formActions);
        
        // Replace profile info with edit form
        const activeTab = document.querySelector('.tab-content.active');
        activeTab.innerHTML = '';
        activeTab.appendChild(editForm);
        
        // Change button to saving
        editBtn.innerHTML = '<i class="fas fa-save"></i> Salvează';
        editBtn.classList.add('saving');
    });
    
    function saveProfileChanges() {
        // Get all edited values
        const updatedUser = { ...user };
        
        // Update user data from form
        updatedUser.username = document.getElementById('edit-name').value;
        updatedUser.email = document.getElementById('edit-email').value;
        updatedUser.fullName = document.getElementById('edit-fullname').value;
        updatedUser.phone = document.getElementById('edit-phone').value;
        updatedUser.address = document.getElementById('edit-address').value;
        
        // Save to storage
        if (localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
            sessionStorage.setItem('user', JSON.stringify(updatedUser));
        }
        
        // Show success message and reload immediately
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
                    const avatarUrl = e.target.result;
                    document.getElementById('user-avatar').src = avatarUrl;
                    
                    // Update user data with new avatar
                    const updatedUser = { ...user, avatar: avatarUrl };
                    if (localStorage.getItem('user')) {
                        localStorage.setItem('user', JSON.stringify(updatedUser));
                    } else {
                        sessionStorage.setItem('user', JSON.stringify(updatedUser));
                    }

                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Foto de profil actualizată cu succes!';
                    
                    const profileCard = document.querySelector('.profile-card');
                    profileCard.insertBefore(successMessage, profileCard.firstChild);
                    
                    // Remove success message after 3 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 3000);
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