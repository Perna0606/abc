let cart = [];

const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.querySelector('.close-btn');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

cartBtn.addEventListener('click', () => cartModal.style.display = 'flex');
closeBtn.addEventListener('click', () => cartModal.style.display = 'none');

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

document.querySelectorAll('.btn-adicionar').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.card-produto');
        const id = card.getAttribute('data-id');
        const nome = card.getAttribute('data-nome');
        const preco = parseFloat(card.getAttribute('data-preco'));

        cart.push({ id, nome, preco });
        updateCartUI();
    });
});

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.length;
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.preco;
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.nome} - ₮ ${item.preco}</span>
            <button class="btn-remove" onclick="removeItem(${index})">✕</button>
        `;
        cartItemsContainer.appendChild(li);
    });

    cartTotal.textContent = `₮ ${total} Créditos`;
}
