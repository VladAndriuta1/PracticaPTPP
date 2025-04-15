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
  