// --- Product Data ---
const menuCategories = [
    {
        categoryId: 'matka-curries',
        title: 'Champaran Matka Curries',
        badge: 'Slow-Cooked on Chulha',
        products: [
            { id: 'p1', title: 'Champaran Mutton Handi', image: 'images/mutton_handi.png', options: [ { weight: '1kg', price: 1600 }, { weight: '500gm', price: 800 }, { weight: '250gm', price: 550 } ] },
            { id: 'p2', title: 'Champaran Chicken Handi', image: 'images/chicken_handi.png', options: [ { weight: '1kg', price: 800 }, { weight: '500gm', price: 400 }, { weight: '250gm', price: 300 } ] },
            { id: 'p3', title: 'Champaran Fish Handi', image: 'images/fish_handi.png', options: [ { weight: '1kg', price: 1200 }, { weight: '500gm', price: 600 }, { weight: '250gm', price: 300 } ] },
            { id: 'p4', title: 'Champaran Prawns Handi', image: 'images/prawns_handi.png', options: [ { weight: '1kg', price: 1600 }, { weight: '500gm', price: 800 }, { weight: '250gm', price: 400 } ] },
            { id: 'p5', title: 'Champaran Egg Curry Handi', image: 'images/egg_handi.png', options: [ { weight: '12 eggs', price: 600 }, { weight: '6 eggs', price: 300 }, { weight: '3 eggs', price: 150 } ] }
        ]
    },
    {
        categoryId: 'thali',
        title: 'Champaran Thali',
        subtitle: 'A complete traditional meal on one plate',
        products: [
            { id: 't1', title: 'Mutton Thali', image: 'images/mutton_thali_1774339434080.png', description: 'Includes: Mutton (100g), Roti (2 pcs), Litti Chokha (1 pc), Rice (150g), Papad (1), Pyaz (50g)', options: [ { weight: '1 Plate', price: 259 } ] },
            { id: 't2', title: 'Chicken Thali', image: 'images/chicken_thali_1774339452952.png', description: 'Includes: Chicken (100g), Roti (2 pcs), Litti Chokha (1 pc), Rice (100g), Papad (1), Pyaz (50g)', options: [ { weight: '1 Plate', price: 159 } ] }
        ]
    },
    {
        categoryId: 'bihari-special',
        title: 'Bihari Special',
        badge: 'Chef\'s Recommendation',
        products: [
            { id: 'b1', title: 'Litti Chokha', image: 'images/litti_chokha_1774339470494.png', description: 'Authentic Bihari delicacy. 2 roasted wheat balls stuffed with sattu, dipped in pure ghee, served with spicy mashed eggplant (chokha) and chutney.', options: [ { weight: '2 Litti', price: 100 } ] }
        ]
    },
    {
        categoryId: 'starters',
        title: 'Starters',
        subtitle: 'Appetizers to begin your feast',
        subCategories: [
            {
                subTitle: 'Non-Veg Starters',
                products: [
                    { id: 's1', title: 'Chicken Tikka', image: 'images/chicken_tikka_1774339487762.png', description: 'Tender chicken pieces marinated in spices and grilled to perfection in the tandoor.', badge: 'Pre Order Only', options: [ { weight: '10 pcs', price: 250 } ] },
                    { id: 's2', title: 'Masala Prawns Fry', image: 'images/masala_prawns_1774339519962.png', description: 'Crispy fried prawns coated in spicy masala, served with onion rings and lemon.', options: [ { weight: '10 pcs', price: 400 } ] },
                    { id: 's3', title: 'Chilli Prawns Fry', image: 'images/chilli_prawns_1774339537496.png', description: 'Crispy prawns tossed with green chillies and bell peppers in Indo-Chinese style.', options: [ { weight: '10 pcs', price: 400 } ] },
                    { id: 's4', title: 'Masala Fish Fry Dry', image: 'images/masala_fish_1774339555034.png', description: 'Crispy fish pieces coated in aromatic spices and shallow fried to golden perfection.', options: [ { weight: '250gm', price: 300 } ] },
                    { id: 's5', title: 'Chicken Dana', image: 'images/chicken_dana_1774339572789.png', description: 'Spiced chicken dana bites, crispy and packed with bold flavors.', options: [ { weight: '250gm', price: 200 } ] }
                ]
            },
            {
                subTitle: 'Veg Starters',
                products: [
                    { id: 's7', title: 'Fried / Roasted Papad', image: 'images/fried_papad_1774339622493.png', description: 'Classic crispy papad, fried or roasted to perfection.', options: [ { weight: '1 pc', price: 30 } ] },
                    { id: 's6', title: 'Masala Papad', image: 'images/masala_papad_1774339603065.png', description: 'Crispy papad topped with onion, tomato, and spices.', options: [ { weight: '1 pc', price: 50 } ] },
                    { id: 's8', title: 'Paneer Tikka', image: 'images/paneer_tikka_1774339640601.png', description: 'Marinated paneer cubes grilled in the tandoor, smoky and flavorful.', badge: 'Pre Order Only', options: [ { weight: '1 Plate', price: 160 } ] }
                ]
            }
        ]
    },
    {
        categoryId: 'sides',
        title: 'Sides',
        subtitle: 'Perfect accompaniments for your meal',
        products: [
            { id: 'sd1', title: 'Plain Rice', image: 'images/plain_rice_1774339658813.png', options: [ { weight: 'Full', price: 100 }, { weight: 'Half', price: 60 } ] },
            { id: 'sd2', title: 'Ghee Rice', image: 'images/ghee_rice.png', options: [ { weight: 'Full', price: 150 }, { weight: 'Half', price: 100 } ] },
            { id: 'sd3', title: 'Sattu Paratha', image: 'images/sattu_paratha.jpg', options: [ { weight: '1 pc', price: 100 } ] },
            { id: 'sd4', title: 'Plain Ghee Paratha', image: 'images/ghee_paratha.jpg', options: [ { weight: '1 pc', price: 50 } ] },
            { id: 'sd5', title: 'Chapati', image: 'images/chapati.jpg', options: [ { weight: '1 pc', price: 15 } ] },
            { id: 'sd6', title: 'Ghee Chapati', image: 'images/ghee_chapati.jpg', options: [ { weight: '1 pc', price: 25 } ] },
            { id: 'sd7', title: 'Litti', image: 'images/litti.jpg', options: [ { weight: '1 pc', price: 50 } ] }
        ]
    },
    {
        categoryId: 'beverages',
        title: 'Beverages',
        subtitle: 'Refreshing drinks to complete your meal',
        products: [
            { id: 'bev1', title: 'Buttermilk', image: 'images/buttermilk.jpg', options: [ { weight: 'Glass', price: 40 } ] },
            { id: 'bev2', title: 'Soft Drink', image: 'images/soft_drink.png', options: [ { weight: 'Standard', price: 0, displayPrice: 'MRP' } ] }
        ]
    }
];

// --- State ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// --- DOM Elements ---
const menuGrid = document.getElementById('menu-sections');
const cartIcon = document.getElementById('cart-icon');
const cartBadge = document.getElementById('cart-badge');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalItems = document.getElementById('cart-total-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const proceedCheckoutBtn = document.getElementById('proceed-checkout');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');

const cartPopup = document.getElementById('cart-popup');
const popupGoCart = document.getElementById('popup-go-cart');
const popupClose = document.getElementById('popup-close');
let popupTimer;

// Intersection Observer for Scroll Animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });


function renderProductCard(product, idx) {
    // Add specific class if it is Fried Papad
    const imgIdClass = product.id === 's7' ? 'fried-papad-fix' : '';
    
    return `
    <div class="product-card animate-on-scroll" style="transition-delay: ${(idx % 4) * 0.1}s">
        <div class="product-img-wrapper">
            <img src="${product.image}" alt="${product.title}" class="product-img ${imgIdClass}" onerror="this.src='https://placehold.co/600x400/2a201a/d3542b?text=${product.title.replace(/ /g, '+')}';">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            ${product.description ? `<p class="product-desc">${product.description}</p>` : ''}
            <div class="product-options">
                ${product.options.map(opt => {
                    const cartItem = cart.find(c => c.id === product.id && c.weight === opt.weight);
                    const qty = cartItem ? cartItem.quantity : 0;
                    const actionId = `action-${product.id}-${opt.weight.replace(/\s+/g, '-')}`;
                    const displayPrc = opt.displayPrice ? opt.displayPrice : '₹' + opt.price;
                    return `
                    <div class="product-option">
                        <span class="opt-weight">${opt.weight}</span>
                        <span class="opt-price">${displayPrc}</span>
                        <div class="opt-action-container" id="${actionId}">
                            ${qty > 0 ? `
                            <div class="opt-qty-controls action-fade-enter">
                                <button class="opt-qty-btn" onclick="updateMenuQuantity('${product.id}', '${opt.weight}', -1)">-</button>
                                <span class="opt-qty-text">${qty}</span>
                                <button class="opt-qty-btn" onclick="updateMenuQuantity('${product.id}', '${opt.weight}', 1)">+</button>
                            </div>
                            ` : `
                            <button class="add-btn action-fade-enter" onclick="addToCart('${product.id}', '${product.title.replace(/'/g, "\\'")}', '${opt.weight}', ${opt.price})">Add</button>
                            `}
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </div>
    `;
}

// --- Render Menu ---
function renderMenu() {
    menuGrid.innerHTML = menuCategories.map(category => `
        <div class="menu-category animate-on-scroll" id="${category.categoryId}">
            ${category.badge ? `<div class="section-badge-wrapper"><span class="section-badge">${category.badge}</span></div>` : ''}
            <h3 class="subsection-title text-center">${category.title}</h3>
            ${category.subtitle ? `<p class="category-subtitle text-center">${category.subtitle}</p>` : ''}
            
            ${category.subCategories ? category.subCategories.map(sub => `
                <h4 class="sub-category-title text-center">${sub.subTitle}</h4>
                <div class="menu-grid" style="margin-bottom: 50px;">
                    ${sub.products.map((product, idx) => renderProductCard(product, idx)).join('')}
                </div>
            `).join('') : `
                <div class="menu-grid">
                    ${category.products.map((product, idx) => renderProductCard(product, idx)).join('')}
                </div>
            `}
        </div>
    `).join('');

    document.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el));
}

// Function strictly for DOM targeted updates without unspooling scroll layout
function renderProductActionUI(productId, weight) {
    const actionId = `action-${productId}-${weight.replace(/\s+/g, '-')}`;
    const container = document.getElementById(actionId);
    if (!container) return; // Might be off-screen

    const cartItem = cart.find(c => c.id === productId && c.weight === weight);
    const qty = cartItem ? cartItem.quantity : 0;
    
    let foundProduct = null;
    let foundPrice = 0;
    for (let cat of menuCategories) {
        if (cat.products) {
            let p = cat.products.find(p => p.id === productId);
            if (p) {
                foundProduct = p;
                let o = p.options.find(o => o.weight === weight);
                if (o) foundPrice = o.price;
                break;
            }
        } else if (cat.subCategories) {
            for (let sub of cat.subCategories) {
                let p = sub.products.find(p => p.id === productId);
                if (p) {
                    foundProduct = p;
                    let o = p.options.find(o => o.weight === weight);
                    if (o) foundPrice = o.price;
                    break;
                }
            }
        }
    }

    if (qty > 0) {
        container.innerHTML = `
        <div class="opt-qty-controls action-fade-enter">
            <button class="opt-qty-btn" onclick="updateMenuQuantity('${productId}', '${weight}', -1)">-</button>
            <span class="opt-qty-text">${qty}</span>
            <button class="opt-qty-btn" onclick="updateMenuQuantity('${productId}', '${weight}', 1)">+</button>
        </div>
        `;
    } else if (foundProduct) {
        container.innerHTML = `
        <button class="add-btn action-fade-enter" onclick="addToCart('${productId}', '${foundProduct.title.replace(/'/g, "\\'")}', '${weight}', ${foundPrice})">Add</button>
        `;
    }
}

// --- Cart Logic ---
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

window.addToCart = function (id, title, weight, price) {
    cart.push({ id, title, weight, price, quantity: 1 });
    saveCart();
    renderProductActionUI(id, weight);
    showPopup();
};

window.updateMenuQuantity = function(id, weight, delta) {
    const index = cart.findIndex(item => item.id === id && item.weight === weight);
    if (index !== -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
    }
    saveCart();
    renderProductActionUI(id, weight);
};

window.updateQuantity = function (index, delta) {
    const item = cart[index];
    item.quantity += delta;
    if (item.quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    renderProductActionUI(item.id, item.weight);
};

window.removeFromCart = function (index) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    renderProductActionUI(item.id, item.weight);
};

function showPopup() {
    cartPopup.classList.add('show');
    clearTimeout(popupTimer);
    popupTimer = setTimeout(() => {
        cartPopup.classList.remove('show');
    }, 3500);
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your handi is empty!</p>';
        cartTotalItems.textContent = '0';
        cartTotalPrice.textContent = '₹0';
        return;
    }

    let totalAmt = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        totalAmt += item.price * item.quantity;
        const printPrice = item.price > 0 ? `₹${item.price * item.quantity}` : 'MRP';
        return `
            <div class="cart-item">
                <button class="remove-item" onclick="removeFromCart(${index})" title="Remove"><i class="ph ph-trash"></i></button>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-weight">${item.weight}</p>
                    <div class="cart-item-controls">
                        <span class="cart-item-price">${printPrice}</span>
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    cartTotalItems.textContent = totalItems;
    cartTotalPrice.textContent = `₹${totalAmt}`;
}

// --- UI interactions & Modals ---
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
}

function openCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    closeCart();
    checkoutModal.classList.add('active');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
}

// Event Listeners
// --- SAFE EVENT LISTENERS (FIXED) ---

if (cartIcon) cartIcon.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

if (proceedCheckoutBtn) proceedCheckoutBtn.addEventListener('click', openCheckout);
if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);

if (popupGoCart) {
    popupGoCart.addEventListener('click', () => {
        if (cartPopup) cartPopup.classList.remove('show');
        openCart();
    });
}

if (popupClose) {
    popupClose.addEventListener('click', () => {
        if (cartPopup) cartPopup.classList.remove('show');
    });
}

if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('cust-name')?.value.trim();
        const phone = document.getElementById('cust-phone')?.value.trim();
        const address = document.getElementById('cust-address')?.value.trim();
        const instructions = document.getElementById('cust-instructions')?.value.trim() || 'None';

        const totalAmt = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        let msg = `Hey Champaran Chulha, I would like to order.\n\n*Order Details:*\n`;

        cart.forEach(item => {
            const prcToken = item.price > 0 ? `₹${item.price * item.quantity}` : 'MRP';
            msg += `- ${item.quantity}x ${item.title} (${item.weight}) : ${prcToken}\n`;
        });

        msg += `\n*Total Amount: ₹${totalAmt}*\n\n`;
        msg += `*Delivery Details:*\n`;
        msg += `Name: ${name}\n`;
        msg += `Phone: ${phone}\n`;
        msg += `Address: ${address}\n`;
        msg += `Instructions: ${instructions}`;

        const encodedMsg = encodeURIComponent(msg);
        const waNumber = '916355197823';
        const waURL = `https://wa.me/${waNumber}?text=${encodedMsg}`;

        window.open(waURL, '_blank');

        const oldCart = [...cart];
        cart = [];
        saveCart();
        oldCart.forEach(item => renderProductActionUI(item.id, item.weight));

        closeCheckoutModal();
        checkoutForm.reset();
    });
}
// Checkout Submission
checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const instructions = document.getElementById('cust-instructions').value.trim() || 'None';
    
    const totalAmt = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let msg = `Hey Champaran Chulha, I would like to order.\n\n*Order Details:*\n`;
    
    cart.forEach(item => {
        const prcToken = item.price > 0 ? `₹${item.price * item.quantity}` : 'MRP';
        msg += `- ${item.quantity}x ${item.title} (${item.weight}) : ${prcToken}\n`;
    });
    
    msg += `\n*Total Amount: ₹${totalAmt}*\n\n`;
    msg += `*Delivery Details:*\n`;
    msg += `Name: ${name}\n`;
    msg += `Phone: ${phone}\n`;
    msg += `Address: ${address}\n`;
    msg += `Instructions: ${instructions}`;
    
    const encodedMsg = encodeURIComponent(msg);
    const waNumber = '916355197823'; // Live Number
    const waURL = `https://wa.me/${waNumber}?text=${encodedMsg}`;
    
    window.open(waURL, '_blank');
    
    const oldCart = [...cart];
    cart = [];
    saveCart();
    oldCart.forEach(item => renderProductActionUI(item.id, item.weight));
    
    closeCheckoutModal();
    checkoutForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateCartUI();
});
