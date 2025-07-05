document.addEventListener('DOMContentLoaded', function () {
  const products = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cart = JSON.parse(localStorage.getItem("cartData")) || [];

  const mainContainer = document.querySelector('.main-container');

  // === Create card grid container ===
  const cardGridContainer = document.createElement('div');
  cardGridContainer.className = 'card-grid-container';

  const cardGrid = document.createElement('div');
  cardGrid.className = 'card-grid';

  cardGridContainer.appendChild(cardGrid);
  mainContainer.appendChild(cardGridContainer);

  // === Create .info-box ===
  const infoBox = document.createElement('div');
  infoBox.className = 'info-box';
  mainContainer.appendChild(infoBox);

  function updateSummary() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = 0;

    cart.forEach(cartItem => {
      const product = products.find(p => p.id === cartItem.productId);
      if (product) {
        totalPrice += product.price * cartItem.quantity;
      }
    });

    infoBox.innerHTML = `
      <h3>Cart Summary</h3>
      <p>Total Items: ${totalItems}</p>
      <p><strong>Total Price: ₹${totalPrice}</strong></p>
      <button style="padding:10px 20px; margin-top:10px; background:#28a745; color:#fff; border:none; border-radius:6px; cursor:pointer;">
        Proceed to Checkout
      </button>
    `;
  }

  // === Render all cart items ===
  cart.forEach((cartItem, index) => {
    const product = products.find(p => p.id === cartItem.productId);
    if (product) {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="card-left">
          <img src="${product.image}" alt="Image">
          <div class="card-text">
            <h4>${product.desc.name}</h4>
            <p>Unit Price: ₹${product.price}</p>
            <p class="qty-text">Quantity: ${cartItem.quantity}</p>
            <p class="total-text">Total: ₹${product.price * cartItem.quantity}</p>
          </div>
        </div>
        <div class="card-right">
          <select>
            <option${cartItem.quantity == 1 ? ' selected' : ''}>Qty: 1</option>
            <option${cartItem.quantity == 2 ? ' selected' : ''}>Qty: 2</option>
            <option${cartItem.quantity == 3 ? ' selected' : ''}>Qty: 3</option>
          </select>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      // === Handle Quantity Change ===
      const select = card.querySelector('select');
      const qtyText = card.querySelector('.qty-text');
      const totalText = card.querySelector('.total-text');

      select.addEventListener('change', function () {
        const newQty = parseInt(this.value.replace(/[^\d]/g, ''));
        cart[index].quantity = newQty;
        qtyText.textContent = `Quantity: ${newQty}`;
        totalText.textContent = `Total: ₹${product.price * newQty}`;
        localStorage.setItem("cartData", JSON.stringify(cart));
        updateSummary();
      });

      // === Handle Delete ===
      const deleteBtn = card.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function () {
        card.remove();
        cart.splice(index, 1);
        localStorage.setItem("cartData", JSON.stringify(cart));
        updateSummary();
      });

      cardGrid.appendChild(card);
    }
  });

  // Initial summary update
  updateSummary();
});
