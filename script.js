// Fixed Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});

// Working Add to Cart Function
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-content').querySelector('h3').textContent;
        alert(`${productName} added to cart successfully!`);
    });
});
