document.addEventListener('DOMContentLoaded', function() {

    const categorySelect = document.getElementById('category-select');
    const brandSelect = document.getElementById('brand-select');
    const modelSelect = document.getElementById('model-select');
    const productDetails = document.getElementById('product-details');


    let selectedProducts = [];
    let lastSelectedCategory = '';
    

    initProductSelector();
    
  
    function initProductSelector() {
        try {
            populateCategories();
            addEventListeners();
            showWelcomeMessage();
        } catch (error) {
            showError('Eroare la inițializare', error);
        }
    }
    
    /** Add event listeners*/
    function addEventListeners() {
        categorySelect.addEventListener('change', handleCategoryChange);
        brandSelect.addEventListener('change', handleBrandChange);
        modelSelect.addEventListener('change', handleModelChange);
        
        // Add search functionality to selects
        makeSelectSearchable(categorySelect);
        makeSelectSearchable(brandSelect);
        makeSelectSearchable(modelSelect);
    }
    
    /**Make select elements searchable*/
    function makeSelectSearchable(select) {
        select.addEventListener('keydown', (e) => {
            const options = select.options;
            const searchStr = e.key.toLowerCase();
            
            for (let i = 0; i < options.length; i++) {
                if (options[i].text.toLowerCase().startsWith(searchStr)) {
                    select.selectedIndex = i;
                    const event = new Event('change');
                    select.dispatchEvent(event);
                    break;
                }
            }
        });
    } 
    
    /**
     * Populate the category dropdown
     */
    function populateCategories() {
        showLoading(categorySelect);
        
        try {
            categorySelect.innerHTML = '<option value="">Selectați o categorie</option>';
            
            const categories = Object.keys(productModels).map(category => ({
                id: category,
                name: formatCategoryName(category)
            }));
            
            categories.sort((a, b) => a.name.localeCompare(b.name));
            
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            });
            
            if (lastSelectedCategory) {
                categorySelect.value = lastSelectedCategory;
                handleCategoryChange();
            }
        } catch (error) {
            showError('Eroare la încărcarea categoriilor', error);
        } finally {
            hideLoading(categorySelect);
        }
        
        brandSelect.disabled = true;
        modelSelect.disabled = true;
    }
    
    function handleCategoryChange() {
        const selectedCategory = categorySelect.value;
        lastSelectedCategory = selectedCategory;
        
        modelSelect.innerHTML = '<option value="">Selectați un model</option>';
        modelSelect.disabled = true;
        
        if (selectedCategory) {
            showLoading(brandSelect);
            
            try {
                brandSelect.disabled = false;
                const brands = getUniqueBrands(selectedCategory);
                populateBrandDropdown(brands);
                
                // Show category description if available
                showCategoryInfo(selectedCategory);
            } catch (error) {
                showError('Eroare la încărcarea brandurilor', error);
            } finally {
                hideLoading(brandSelect);
            }
        } else {
            brandSelect.disabled = true;
            brandSelect.innerHTML = '<option value="">Selectați un brand</option>';
            clearProductDetails();
        }
    }
    
    /**
     * Handle brand change
     */
    function handleBrandChange() {
        const selectedCategory = categorySelect.value;
        const selectedBrand = brandSelect.value;
        
        if (selectedBrand) {
            showLoading(modelSelect);
            
            try {
                modelSelect.disabled = false;
                const models = getModelsByBrand(selectedCategory, selectedBrand);
                populateModelDropdown(models);
            } catch (error) {
                showError('Eroare la încărcarea modelelor', error);
            } finally {
                hideLoading(modelSelect);
            }
        } else {
            modelSelect.disabled = true;
            modelSelect.innerHTML = '<option value="">Selectați un model</option>';
        }
        
        clearProductDetails();
    }
    
    /**
     * Handle model change
     */
    function handleModelChange() {
        const selectedCategory = categorySelect.value;
        const selectedModel = modelSelect.value;
        
        if (selectedModel) {
            showLoading(productDetails);
            
            try {
                const product = getProductDetails(selectedCategory, selectedModel);
                displayProductDetails(product);
            } catch (error) {
                showError('Eroare la încărcarea detaliilor produsului', error);
            } finally {
                hideLoading(productDetails);
            }
        } else {
            clearProductDetails();
        }
    }
    
    /**
     * Get unique brands for a category
     */
    function getUniqueBrands(category) {
        const products = productModels[category];
        const uniqueBrands = new Set();
        
        products.forEach(product => {
            uniqueBrands.add(product.brand);
        });
        
        return Array.from(uniqueBrands).sort();
    }
    
    /**
     * Get models by brand and category
     */
    function getModelsByBrand(category, brand) {
        const products = productModels[category];
        
        return products
            .filter(product => product.brand === brand)
            .map(product => ({
                id: product.id,
                name: product.name
            }));
    }
    
    /**
     * Get product details
     */
    function getProductDetails(category, modelId) {
        const products = productModels[category];
        return products.find(product => product.id === modelId);
    }
    
    /**
     * Populate brand dropdown
     */
    function populateBrandDropdown(brands) {
        brandSelect.innerHTML = '<option value="">Selectați un brand</option>';
        
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandSelect.appendChild(option);
        });
    }
    
    /**
     * Populate model dropdown
     */
    function populateModelDropdown(models) {
        modelSelect.innerHTML = '<option value="">Selectați un model</option>';
        
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model.id;
            option.textContent = model.name;
            modelSelect.appendChild(option);
        });
    }
    
    /**
     * Display product details
     */
    function displayProductDetails(product) {
        clearProductDetails();
        
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'product-details-container';
        
        // Product header
        const header = createProductHeader(product);
        detailsContainer.appendChild(header);
        
        // Product specifications
        const specs = createProductSpecs(product);
        detailsContainer.appendChild(specs);
        
        // Store prices
        const prices = createStorePrices(product);
        detailsContainer.appendChild(prices);
        
        // Price comparison
        const comparison = createPriceComparison(product);
        detailsContainer.appendChild(comparison);
        
        productDetails.appendChild(detailsContainer);
    }
    
    /**
     * Create product header section
     */
    function createProductHeader(product) {
        const header = document.createElement('div');
        header.className = 'product-header';
        
        const title = document.createElement('h2');
        title.textContent = product.name;
        
        const brand = document.createElement('div');
        brand.className = 'product-brand';
        brand.textContent = product.brand;
        
        header.appendChild(title);
        header.appendChild(brand);
        
        return header;
    }
    
    /**
     * Create product specifications section
     */
    function createProductSpecs(product) {
        const container = document.createElement('div');
        container.className = 'specs-container';
        
        const title = document.createElement('h3');
        title.textContent = 'Specificații';
        container.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'specs-grid';
        
        Object.entries(product.specs).forEach(([key, value]) => {
            const spec = document.createElement('div');
            spec.className = 'spec-item';
            spec.innerHTML = `
                <div class="spec-label">${formatSpecName(key)}</div>
                <div class="spec-value">${value}</div>
            `;
            grid.appendChild(spec);
        });
        
        container.appendChild(grid);
        return container;
    }
    
    /**
     * Create store prices section
     */
    function createStorePrices(product) {
        const container = document.createElement('div');
        container.className = 'prices-container';
        
        const title = document.createElement('h3');
        title.textContent = 'Prețuri în magazine';
        container.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'prices-grid';
        
        // Sort stores by price
        const stores = Object.entries(product.stores)
            .sort(([,a], [,b]) => a.price - b.price);
        
        stores.forEach(([store, details], index) => {
            const storeCard = document.createElement('div');
            storeCard.className = `store-card ${details.inStock ? 'in-stock' : 'out-of-stock'}`;
            if (index === 0) storeCard.classList.add('best-price');
            
            storeCard.innerHTML = `
                <div class="store-name">${formatStoreName(store)}</div>
                <div class="price ${index === 0 ? 'best-price' : ''}">${formatPrice(details.price)}</div>
                <div class="stock-status">${details.inStock ? 'În stoc' : 'Stoc epuizat'}</div>
                <a href="${details.url}" class="buy-button" target="_blank">
                    ${index === 0 ? 'Cel mai bun preț' : 'Cumpără'}
                </a>
            `;
            
            grid.appendChild(storeCard);
        });
        
        container.appendChild(grid);
        return container;
    }
    
    /**
     * Create price comparison section
     */
    function createPriceComparison(product) {
        const prices = Object.values(product.stores).map(store => store.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
        const savings = maxPrice - minPrice;
        
        const container = document.createElement('div');
        container.className = 'price-comparison';
        
        container.innerHTML = `
            <h3>Analiză prețuri</h3>
            <div class="price-stats">
                <div class="stat">
                    <div class="stat-label">Cel mai mic preț</div>
                    <div class="stat-value min-price">${formatPrice(minPrice)}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Preț mediu</div>
                    <div class="stat-value avg-price">${formatPrice(avgPrice)}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Cel mai mare preț</div>
                    <div class="stat-value max-price">${formatPrice(maxPrice)}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Economisiți până la</div>
                    <div class="stat-value savings">${formatPrice(savings)}</div>
                </div>
            </div>
        `;
        
        return container;
    }
    
    /**
     * Show welcome message
     */
    function showWelcomeMessage() {
        if (!categorySelect.value) {
            const welcome = document.createElement('div');
            welcome.className = 'welcome-message';
            welcome.innerHTML = `
                <h2>Bine ați venit la SmartChoice</h2>
                <p>Selectați o categorie pentru a începe comparația produselor</p>
            `;
            productDetails.appendChild(welcome);
        }
    }
    
    /**
     * Show category information
     */
    function showCategoryInfo(category) {
        const products = productModels[category];
        const brands = getUniqueBrands(category);
        const prices = products.flatMap(p => Object.values(p.stores).map(s => s.price));
        
        const info = document.createElement('div');
        info.className = 'category-info';
        info.innerHTML = `
            <div class="category-stats">
                <div class="stat">
                    <div class="stat-label">Produse</div>
                    <div class="stat-value">${products.length}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Branduri</div>
                    <div class="stat-value">${brands.length}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Preț minim</div>
                    <div class="stat-value">${formatPrice(Math.min(...prices))}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Preț maxim</div>
                    <div class="stat-value">${formatPrice(Math.max(...prices))}</div>
                </div>
            </div>
        `;
        
        productDetails.innerHTML = '';
        productDetails.appendChild(info);
    }
    
    /**
     * Show loading state
     */
    function showLoading(element) {
        element.classList.add('loading');
    }
    
    /**
     * Hide loading state
     */
    function hideLoading(element) {
        element.classList.remove('loading');
    }
    
    /**
     * Show error message
     */
    function showError(message, error) {
        console.error(error);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        productDetails.appendChild(errorDiv);
    }
    
    /**
     * Clear product details
     */
    function clearProductDetails() {
        productDetails.innerHTML = '';
    }
    
    /**
     * Format category name
     */
    function formatCategoryName(category) {
        const names = {
            smartphones: 'Telefoane',
            laptops: 'Laptop-uri',
            tvs: 'Televizoare',
            tablets: 'Tablete',
            cameras: 'Camere foto',
            headphones: 'Căști',
            speakers: 'Boxe',
            smartwatches: 'Ceasuri smart'
        };
        return names[category] || category.charAt(0).toUpperCase() + category.slice(1);
    }
    
    /**
     * Format spec name
     */
    function formatSpecName(spec) {
        const names = {
            screen: 'Ecran',
            processor: 'Procesor',
            ram: 'Memorie RAM',
            storage: 'Stocare',
            camera: 'Cameră',
            battery: 'Baterie',
            gpu: 'Placă video',
            os: 'Sistem de operare',
            weight: 'Greutate',
            dimensions: 'Dimensiuni'
        };
        return names[spec] || spec.charAt(0).toUpperCase() + spec.slice(1).replace(/([A-Z])/g, ' $1');
    }
    
    /**
     * Format store name
     */
    function formatStoreName(store) {
        const names = {
            darwin: 'Darwin',
            orange: 'Orange',
            enter: 'Enter',
            maximum: 'Maximum',
            ultra: 'Ultra',
            bomba: 'Bomba'
        };
        return names[store] || store.charAt(0).toUpperCase() + store.slice(1);
    }
    
    /**
     * Format price
     */
    function formatPrice(price) {
        return price.toLocaleString('ro-MD', {
            style: 'currency',
            currency: 'MDL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }
}); 