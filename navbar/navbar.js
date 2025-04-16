document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const disconnectBtn = document.getElementById('disconnect-btn');
    
    // Toggle menu on click
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });
    
    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the click is outside the menu and the menu is open
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
    
    // Disconnect functionality
    disconnectBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show confirmation dialog
        if (confirm('Sunteți sigur că doriți să vă deconectați?')) {
            // Clear any stored user data
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            
            // Redirect to login page
            window.location.href = '../autentificare/auth.html';
        }
    });
});
