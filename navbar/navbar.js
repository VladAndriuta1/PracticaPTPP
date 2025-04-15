document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if the click is outside the menu and the menu is open
    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});
