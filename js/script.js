document.addEventListener('DOMContentLoaded', () => {
    loadProductData();
});

async function loadProductData() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        console.log('Product data loaded:', products);
        // You can now use the 'products' data to populate your UI
    } catch (error) {
        console.error('Error loading product data:', error);
    }
}