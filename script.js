document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const cartCountSpan = document.getElementById('cart-count');
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const clearCartBtn = document.querySelector('.clear-cart-btn');
    const shopNowBtn = document.querySelector('.shop-now-btn');

    let products = [];
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || []; // Load cart from local storage

    // --- Product Data (This would typically come from an API) ---
    const fetchProducts = () => {
        // In a real application, you'd fetch this from a backend API
        products = [
            { id: 1, name: 'Premium Wireless Headphones', price: 99.99, image: 'images/product1.jpg', description: 'Experience crystal clear audio with these premium headphones.' },
            { id: 2, name: 'Stylish Smartwatch', price: 149.99, image: 'images/product2.jpg', description: 'Stay connected and track your fitness with this sleek smartwatch.' },
            { id: 3, name: 'Portable Bluetooth Speaker', price: 49.99, image: 'images/product3.jpg', description: 'Powerful sound in a compact design, perfect for any adventure.' },
            { id: 4, name: 'Ergonomic Office Chair', price: 299.99, image: 'images/product1.jpg', description: 'Work comfortably all day with superior lumbar support.' },
            { id: 5, name: '4K Ultra HD Smart TV', price: 599.99, image: 'images/product2.jpg', description: 'Immersive viewing experience with vibrant colors and sharp details.' },
            { id: 6, name: 'Professional DSLR Camera', price: 899.99, image: 'images/product3.jpg', description: 'Capture stunning photos and videos with advanced features.' }
        ];
        renderProducts();
    };

    // --- Render Products to the UI ---
    const renderProducts = () => {
        productGrid.innerHTML = ''; // Clear existing products
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    };

    // --- Add to Cart Functionality ---
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(event.target.dataset.id);
            const productToAdd = products.find(p => p.id === productId);

            if (productToAdd) {
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({ ...productToAdd, quantity: 1 });
                }
                updateCart();
            }
        }
    });

    // --- Update Cart UI and Local Storage ---
    const updateCart = () => {
        cartItemsList.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li style="text-align: center; color: #666;">Your cart is empty.</li>';
        } else {
            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="item-details">
                        ${item.name} ($${item.price.toFixed(2)}) x ${item.quantity}
                        <span>Subtotal: $${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                `;
                cartItemsList.appendChild(listItem);
                total += item.price * item.quantity;
                itemCount += item.quantity;
            });
        }

        cartTotalSpan.textContent = total.toFixed(2);
        cartCountSpan.textContent = itemCount;

        localStorage.setItem('shoppingCart', JSON.stringify(cart)); // Save cart to local storage
    };

    // --- Remove Item from Cart ---
    cartItemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item-btn')) {
            const productId = parseInt(event.target.dataset.id);
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }
    });

    // --- Clear Cart ---
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        updateCart();
        alert('Cart has been cleared!');
    });

    // --- Toggle Cart Sidebar ---
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.toggle('open');
    });

    // Close sidebar if clicked outside (optional but good UX)
    document.addEventListener('click', (event) => {
        if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target) && cartSidebar.classList.contains('open')) {
            cartSidebar.classList.remove('open');
        }
    });

    // --- Shop Now Button Scroll ---
    shopNowBtn.addEventListener('click', () => {
        document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Initial load
    fetchProducts();
    updateCart(); // Initialize cart display on page load
});
