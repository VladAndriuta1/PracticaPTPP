// Product database will be loaded from JSON file
let productDatabase = {};

// Initialize search input and localStorage functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load product data from JSON file
    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            productDatabase = data;
            console.log('Product data loaded successfully');
        })
        .catch(error => {
            console.error('Error loading product data:', error);
            // Fallback to empty database if fetch fails
            productDatabase = {};
        });
    
    const searchInput = document.getElementById("searchInput");
    const savedSearch = localStorage.getItem("lastSearch");
    
    if (savedSearch) {
        searchInput.value = savedSearch;
    }
    
    // Save search term to localStorage when input changes
    searchInput.addEventListener("input", function() {
        localStorage.setItem("lastSearch", this.value);
    });
});

function cautaProdus() {
    const rezultate = document.getElementById("results");
    const searchInput = document.getElementById("searchInput");
    const input = searchInput.value.trim().toLowerCase();
  
    if (input === "") {
        rezultate.innerHTML = "<p>Introduceți un produs pentru a căuta.</p>";
        return;
    }
  
    // Save the current search to localStorage
    localStorage.setItem("lastSearch", input);
    
    // Find matching products
    let foundProducts = [];
    for (let category in productDatabase) {
        if (category.includes(input)) {
            foundProducts = foundProducts.concat(productDatabase[category]);
        }
    }
    
    if (foundProducts.length === 0) {
        rezultate.innerHTML = "<p>Nu am găsit produse care să corespundă căutării.</p>";
        return;
    }
    
    // Sort products by price
    foundProducts.sort((a, b) => a.pret - b.pret);
    
    // Display results
    let html = '<h2>Rezultate căutare</h2>';
    foundProducts.forEach(produs => {
        html += `
            <div class="product">
                <h3>${produs.nume}</h3>
                <p>Magazin: ${produs.magazin}</p>
                <p>Preț: ${produs.pret} MDL</p>
                <a href="${produs.link}" target="_blank" class="btn btn-primary">Vezi oferta</a>
                <button onclick="salveazaProdus('${produs.nume}', '${produs.magazin}', ${produs.pret})" class="btn btn-secondary">Salvează</button>
            </div>
        `;
    });
    
    rezultate.innerHTML = html;
}

function salveazaProdus(nume, magazin, pret) {
    // Get existing saved products or initialize empty array
    const produseSalvate = JSON.parse(localStorage.getItem('produseSalvate') || '[]');
    
    // Add new product
    produseSalvate.push({
        nume: nume,
        magazin: magazin,
        pret: pret,
        data: new Date().toISOString()
    });
    
    // Save back to localStorage
    localStorage.setItem('produseSalvate', JSON.stringify(produseSalvate));
    
    alert('Produs salvat cu succes!');
}

function afiseazaProduseSalvate() {
    const rezultate = document.getElementById("results");
    const produseSalvate = JSON.parse(localStorage.getItem('produseSalvate') || '[]');
    
    if (produseSalvate.length === 0) {
        rezultate.innerHTML = "<p>Nu aveți produse salvate.</p>";
        return;
    }
    
    let html = '<h2>Produse Salvate</h2>';
    produseSalvate.forEach((produs, index) => {
        const data = new Date(produs.data).toLocaleString();
        html += `
            <div class="product">
                <h3>${produs.nume}</h3>
                <p>Magazin: ${produs.magazin}</p>
                <p>Preț: ${produs.pret} MDL</p>
                <p>Salvat la: ${data}</p>
                <button onclick="stergeProdus(${index})" class="btn btn-danger">Șterge</button>
            </div>
        `;
    });
    
    rezultate.innerHTML = html;
}

function stergeProdus(index) {
    const produseSalvate = JSON.parse(localStorage.getItem('produseSalvate') || '[]');
    produseSalvate.splice(index, 1);
    localStorage.setItem('produseSalvate', JSON.stringify(produseSalvate));
    afiseazaProduseSalvate();
}
  