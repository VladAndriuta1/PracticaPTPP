function cautaProdus() {
    const rezultate = document.getElementById("results");
    const input = document.getElementById("searchInput").value.trim();
  
    if (input === "") {
      rezultate.innerHTML = "<p>Introduceți un produs pentru a căuta.</p>";
      return;
    }
  
    // Exemplu de rezultate statice
    rezultate.innerHTML = `
      <div class="product">
        <h3>${input} - Magazin A</h3>
        <p>Preț: 99 RON</p>
      </div>
      <div class="product">
        <h3>${input} - Magazin B</h3>
        <p>Preț: 89 RON</p>
      </div>
    `;
  }
  