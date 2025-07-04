/* Global Styles */
:root {
    --primary: #ff6b6b;
    --secondary: #794afa;
    --dark: #1e1e1e;
    --light: #f8f9fa;
    --gray: #6c757d;
    --white: #ffffff;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: var(--light);
    color: var(--dark);
    overflow-x: hidden;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

.btn:hover {
    background-color: #ff5252;
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}

.heading {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.heading span {
    color: var(--primary);
}

/* Header Styles */
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--white);
    padding: 1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: var(--shadow);
}

header .logo h1 {
    font-size: 2rem;
    color: var(--dark);
}

header .logo h1 span {
    color: var(--primary);
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin: 0 1rem;
}

header nav ul li a {
    text-decoration: none;
    color: var(--dark);
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

header nav ul li a:hover {
    color: var(--primary);
}

header .icons i {
    font-size: 1.5rem;
    margin-left: 1.5rem;
    cursor: pointer;
    color: var(--dark);
    transition: all 0.3s ease;
}

header .icons i:hover {
    color: var(--primary);
}

header .search-form {
    position: absolute;
    top: 110%;
    right: 7%;
    background: var(--white);
    width: 30rem;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 5px;
    box-shadow: var(--shadow);
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.3s ease;
}

header .search-form.active {
    transform: scaleY(1);
}

header .search-form input {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    color: var(--dark);
    border: none;
    outline: none;
}

header .search-form label {
    font-size: 1.2rem;
    color: var(--dark);
    cursor: pointer;
}

#menu-btn {
    display: none;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80');
    background-size: cover;
    background-position: center;
    padding: 0 7%;
}

.hero .content {
    max-width: 50rem;
}

.hero .content h3 {
    font-size: 2rem;
    color: var(--white);
    margin-bottom: 1rem;
}

.hero .content h1 {
    font-size: 4rem;
    color: var(--white);
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero .content p {
    font-size: 1.2rem;
    color: var(--white);
    margin-bottom: 2rem;
}

/* Products Section */
.products {
    padding: 5rem 7%;
    background: var(--white);
}

.filter-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
}

.filter-buttons .btn {
    background: var(--light);
    color: var(--dark);
}

.filter-buttons .btn.active {
    background: var(--primary);
    color: var(--white);
}

.product-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
}

.product-card {
    background: var(--light);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-image {
    height: 200px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.1);
}

.product-content {
    padding: 1.5rem;
}

.product-content h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.product-content .price {
    font-size: 1.2rem;
    color: var(--primary);
    margin-bottom: 1rem;
    font-weight: bold;
}

.product-content .stars {
    color: #ffc107;
    margin-bottom: 1rem;
}

/* Footer */
footer {
    background: var(--dark);
    color: var(--white);
    padding: 3rem 7% 1rem;
}

.footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-col h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--white);
}

.footer-col p {
    margin-bottom: 1rem;
    color: #ccc;
}

.footer-col ul {
    list-style: none;
}

.footer-col ul li {
    margin-bottom: 1rem;
}

.footer-col ul li a {
    color: #ccc;
    text-decoration: none;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: var(--primary);
    padding-left: 5px;
}

.social-links a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--white);
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: var(--primary);
    transform: translateY(-5px);
}

.copyright {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #ccc;
}

/* Responsive Design */
@media (max-width: 991px) {
    header {
        padding: 1rem 3%;
    }
    
    .hero, .products {
        padding: 5rem 3%;
    }
}

@media (max-width: 768px) {
    #menu-btn {
        display: inline-block;
    }
    
    header nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        padding: 1rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: all 0.3s ease;
    }
    
    header nav.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    
    header nav ul {
        display: block;
    }
    
    header nav ul li {
        margin: 1rem 0;
    }
    
    .hero .content h1 {
        font-size: 3rem;
    }
}

@media (max-width: 450px) {
    html {
        font-size: 14px;
    }
    
    .hero .content h1 {
        font-size: 2.5rem;
    }
    
    .product-container {
        grid-template-columns: 1fr;
    }
}
