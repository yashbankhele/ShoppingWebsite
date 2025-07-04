// Toggle mobile menu
document.getElementById('menu-btn').addEventListener('click', () => {
    document.querySelector('header nav').classList.toggle('active');
});

// Product hover effect
document.querySelectorAll('.product-card').forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.querySelector('.product-image img').style.transform = 'scale(1.1)';
    });
    
    product.addEventListener('mouseleave', () => {
        product.querySelector('.product-image img').style.transform = 'scale(1)';
    });
});

// Add to cart functionality
document.querySelectorAll('.btn').forEach(button => {
    if (button.textContent === 'Add to Cart') {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = button.closest('.product-content').querySelector('h3').textContent;
            alert(`${productName} added to cart!`);
        });
    }
});

// Free resource links
document.querySelectorAll('.resource-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(link.href, '_blank');
    });
});
