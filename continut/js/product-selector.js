/**
 * Product Selector for SmartChoice Application
 * This file handles the product selection process, showing brands first and then models
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const categorySelect = document.getElementById('category-select');
  const brandSelect = document.getElementById('brand-select');
  const modelSelect = document.getElementById('model-select');
  const productDetails = document.getElementById('product-details');
  
  // Initialize the product selector
  initProductSelector();
  
  /**
   * Initialize the product selector
   */
  function initProductSelector() {
    // Populate categories
    populateCategories();
    
    // Add event listeners
    categorySelect.addEventListener('change', handleCategoryChange);
    brandSelect.addEventListener('change', handleBrandChange);
    modelSelect.addEventListener('change', handleModelChange);
  }
  
  /**
   * Populate the category dropdown
   */
  function populateCategories() {
    // Clear existing options
    categorySelect.innerHTML = '<option value="">Select a category</option>';
    
    // Get categories from product models
    const categories = Object.keys(productModels).map(category => {
      return {
        id: category,
        name: formatCategoryName(category)
      };
    });
    
    // Add categories to dropdown
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });
    
    // Disable brand and model selects initially
    brandSelect.disabled = true;
    modelSelect.disabled = true;
  }
  
  /**
   * Handle category change
   */
  function handleCategoryChange() {
    const selectedCategory = categorySelect.value;
    
    // Clear and disable model select
    modelSelect.innerHTML = '<option value="">Select a model</option>';
    modelSelect.disabled = true;
    
    if (selectedCategory) {
      // Enable brand select
      brandSelect.disabled = false;
      
      // Get unique brands for the selected category
      const brands = getUniqueBrands(selectedCategory);
      
      // Populate brand dropdown
      populateBrandDropdown(brands);
    } else {
      // Disable brand select if no category is selected
      brandSelect.disabled = true;
      brandSelect.innerHTML = '<option value="">Select a brand</option>';
    }
    
    // Clear product details
    clearProductDetails();
  }
  
  /**
   * Handle brand change
   */
  function handleBrandChange() {
    const selectedCategory = categorySelect.value;
    const selectedBrand = brandSelect.value;
    
    if (selectedBrand) {
      // Enable model select
      modelSelect.disabled = false;
      
      // Get models for the selected brand and category
      const models = getModelsByBrand(selectedCategory, selectedBrand);
      
      // Populate model dropdown
      populateModelDropdown(models);
    } else {
      // Disable model select if no brand is selected
      modelSelect.disabled = true;
      modelSelect.innerHTML = '<option value="">Select a model</option>';
    }
    
    // Clear product details
    clearProductDetails();
  }
  
  /**
   * Handle model change
   */
  function handleModelChange() {
    const selectedCategory = categorySelect.value;
    const selectedModel = modelSelect.value;
    
    if (selectedModel) {
      // Get product details
      const product = getProductDetails(selectedCategory, selectedModel);
      
      // Display product details
      displayProductDetails(product);
    } else {
      // Clear product details
      clearProductDetails();
    }
  }
  
  /**
   * Get unique brands for a category
   */
  function getUniqueBrands(category) {
    const products = productModels[category];
    const brands = new Set();
    
    products.forEach(product => {
      brands.add(product.brand);
    });
    
    return Array.from(brands).map(brand => {
      return {
        id: brand.toLowerCase().replace(/\s+/g, '-'),
        name: brand
      };
    });
  }
  
  /**
   * Get models by brand and category
   */
  function getModelsByBrand(category, brand) {
    const products = productModels[category];
    
    return products
      .filter(product => product.brand.toLowerCase() === brand.toLowerCase())
      .map(product => {
        return {
          id: product.id,
          name: product.name
        };
      });
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
    // Clear existing options
    brandSelect.innerHTML = '<option value="">Select a brand</option>';
    
    // Add brands to dropdown
    brands.forEach(brand => {
      const option = document.createElement('option');
      option.value = brand.id;
      option.textContent = brand.name;
      brandSelect.appendChild(option);
    });
  }
  
  /**
   * Populate model dropdown
   */
  function populateModelDropdown(models) {
    // Clear existing options
    modelSelect.innerHTML = '<option value="">Select a model</option>';
    
    // Add models to dropdown
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
    // Clear existing details
    clearProductDetails();
    
    // Create product details container
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'product-details-container';
    
    // Add product name
    const productName = document.createElement('h2');
    productName.textContent = product.name;
    detailsContainer.appendChild(productName);
    
    // Add product specs
    const specsContainer = document.createElement('div');
    specsContainer.className = 'specs-container';
    
    const specsTitle = document.createElement('h3');
    specsTitle.textContent = 'Specifications';
    specsContainer.appendChild(specsTitle);
    
    const specsList = document.createElement('ul');
    specsList.className = 'specs-list';
    
    for (const [key, value] of Object.entries(product.specs)) {
      const specItem = document.createElement('li');
      specItem.innerHTML = `<strong>${formatSpecName(key)}:</strong> ${value}`;
      specsList.appendChild(specItem);
    }
    
    specsContainer.appendChild(specsList);
    detailsContainer.appendChild(specsContainer);
    
    // Add store prices
    const pricesContainer = document.createElement('div');
    pricesContainer.className = 'prices-container';
    
    const pricesTitle = document.createElement('h3');
    pricesTitle.textContent = 'Available at';
    pricesContainer.appendChild(pricesTitle);
    
    const pricesList = document.createElement('ul');
    pricesList.className = 'prices-list';
    
    for (const [store, details] of Object.entries(product.stores)) {
      const priceItem = document.createElement('li');
      priceItem.className = details.inStock ? 'in-stock' : 'out-of-stock';
      
      const storeName = formatStoreName(store);
      const price = details.price.toLocaleString('en-US', { style: 'currency', currency: 'MDL' });
      const stockStatus = details.inStock ? 'In Stock' : 'Out of Stock';
      
      priceItem.innerHTML = `
        <div class="store-info">
          <span class="store-name">${storeName}</span>
          <span class="price">${price}</span>
          <span class="stock-status">${stockStatus}</span>
        </div>
        <a href="${details.url}" target="_blank" class="buy-button">Buy Now</a>
      `;
      
      pricesList.appendChild(priceItem);
    }
    
    pricesContainer.appendChild(pricesList);
    detailsContainer.appendChild(pricesContainer);
    
    // Add to product details
    productDetails.appendChild(detailsContainer);
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
    return category
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }
  
  /**
   * Format spec name
   */
  function formatSpecName(spec) {
    return spec
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }
  
  /**
   * Format store name
   */
  function formatStoreName(store) {
    return store.charAt(0).toUpperCase() + store.slice(1);
  }
}); 