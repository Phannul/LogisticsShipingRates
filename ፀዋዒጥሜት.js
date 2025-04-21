const toggleDarkMode = document.getElementById('toggleDarkMode');
const cartItems = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const cartCount = document.getElementById('cart-count');

let cart = [];
const TAX_RATE = 0.0825; // 8.25% Texas style tax

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const name = card.getAttribute('data-name');
        const price = parseFloat(card.getAttribute('data-price'));

        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    subtotalEl.textContent = subtotal.toFixed(2);
    taxEl.textContent = tax.toFixed(2);
    totalEl.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}