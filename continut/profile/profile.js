document.addEventListener('DOMContentLoaded', function () {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = '../../autentificare/auth.html';
        return;
    }

    populateUserData(currentUser);

    function populateUserData(user) {
        document.getElementById('user-name').textContent = user.username || 'Nume Utilizator';
        document.getElementById('user-email').textContent = user.email || 'email@example.com';
        document.getElementById('user-role').textContent = user.role || 'Membru';
        document.getElementById('user-fullname').textContent = user.fullName || 'Nume Prenume';
        document.getElementById('user-phone').textContent = user.phone || '+373 22 123 456';
        document.getElementById('user-address').textContent = user.address || 'Chișinău, Moldova';
        function formatDate(dateString) {
            const date = new Date(dateString);
            if (isNaN(date)) return 'Data necunoscută';
            const zi = String(date.getDate()).padStart(2, '0');
            const luna = String(date.getMonth() + 1).padStart(2, '0');
            const an = date.getFullYear();
            return `${zi}.${luna}.${an}`;
        }
        
        document.getElementById('user-registration-date').textContent = user.createdAt ? formatDate(user.createdAt) : '01.01.2023';

        if (user.avatar) {
            document.getElementById('user-avatar').src = user.avatar;
        }
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    const editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', function () {
        if (editBtn.classList.contains('saving')) {
            saveProfileChanges();
            return;
        }

        const userFields = [
            { id: 'user-name', label: 'Nume Utilizator', type: 'text' },
            { id: 'user-email', label: 'Email', type: 'email' },
            { id: 'user-fullname', label: 'Nume Complet', type: 'text' },
            { id: 'user-phone', label: 'Telefon', type: 'tel' },
            { id: 'user-address', label: 'Adresa', type: 'text' },
        ];

        const editForm = document.createElement('form');
        editForm.id = 'edit-profile-form';
        editForm.className = 'edit-form';

        userFields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.htmlFor = `edit-${field.id.replace('user-', '')}`;
            label.textContent = field.label;

            const input = document.createElement('input');
            input.type = field.type;
            input.value = document.getElementById(field.id).textContent;
            input.id = `edit-${field.id.replace('user-', '')}`;
            input.className = 'edit-input';

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            editForm.appendChild(formGroup);
        });

        const formActions = document.createElement('div');
        formActions.className = 'form-actions';

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Anulează';
        cancelBtn.onclick = function () {
            location.reload();
        };

        formActions.appendChild(cancelBtn);
        editForm.appendChild(formActions);

        const activeTab = document.querySelector('.tab-content.active');
        activeTab.innerHTML = '';
        activeTab.appendChild(editForm);

        editBtn.innerHTML = '<i class="fas fa-save"></i> Salvează';
        editBtn.classList.add('saving');
    });

    function saveProfileChanges() {
        const updatedUser = { ...currentUser };

        updatedUser.username = document.getElementById('edit-name').value;
        updatedUser.email = document.getElementById('edit-email').value;
        updatedUser.fullName = document.getElementById('edit-fullname').value;
        updatedUser.phone = document.getElementById('edit-phone').value;
        updatedUser.address = document.getElementById('edit-address').value;

        localStorage.setItem('currentUser', JSON.stringify(updatedUser));

        location.reload();
    }

    const changePasswordBtn = document.querySelector('.change-password-btn');
    changePasswordBtn.addEventListener('click', function () {
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
                        <button type="submit" class="save-btn">Salvează</button>
                        <button type="button" class="cancel-btn">Anulează</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        const form = modal.querySelector('#change-password-form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (newPassword !== confirmPassword) {
                alert('Parolele noi nu coincid!');
                return;
            }

            alert('Parola a fost schimbată cu succes!');
            modal.remove();
        });

        modal.querySelector('.cancel-btn').addEventListener('click', function () {
            modal.remove();
        });
    });

    const avatarEditBtn = document.querySelector('.avatar-edit');
    avatarEditBtn.addEventListener('click', function () {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';

        input.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const avatarUrl = e.target.result;
                    document.getElementById('user-avatar').src = avatarUrl;

                    const updatedUser = { ...currentUser, avatar: avatarUrl };
                    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Foto de profil actualizată cu succes!';

                    const profileCard = document.querySelector('.profile-card');
                    profileCard.insertBefore(successMessage, profileCard.firstChild);

                    setTimeout(() => {
                        successMessage.remove();
                    }, 3000);
                };
                reader.readAsDataURL(file);
            }
        });

        input.click();
    });

    const disconnectBtns = document.querySelectorAll('#disconnect-btn, #profile-disconnect-btn');
    disconnectBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            handleDisconnect();
        });
    });

    function handleDisconnect() {
        if (confirm('Sunteți sigur că doriți să vă deconectați?')) {
            localStorage.removeItem('currentUser');
            window.location.href = '../../autentificare/auth.html';
        }
    }
});
