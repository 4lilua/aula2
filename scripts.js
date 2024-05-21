function addToCart(item) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item} adicionado ao carrinho!`);
}

function loadCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('cart-list')) {
        loadCart();
    }
});
