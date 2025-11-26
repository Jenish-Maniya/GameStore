let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 6000);
}


document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

let cartItems = [];
let products = []; 

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cartItems.push(product);
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="height: 50px;">
            <div>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartModal.style.display = 'block';
}

function removeFromCart(index) {
    cartItems.splice(index, 1); 
    updateCartUI(); 
    showCart(); 
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}


function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="height: 50px;">
            <div>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    
    if (cartItems.length > 0) {
        const viewButton = document.createElement('button');
        viewButton.className = 'view-btn';
        viewButton.textContent = 'Proceed to Payment';
        viewButton.onclick = () => redirectToPayment();
        cartItemsContainer.appendChild(viewButton);
    }

    cartModal.style.display = 'block';
}
function redirectToPayment() {
    
    window.location.href = 'payment.html'; 
    
}
function msgshow(){
    alert("Payment Done")
}