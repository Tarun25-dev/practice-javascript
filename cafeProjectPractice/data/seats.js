const tables = document.querySelectorAll('.seats');
const popup = document.querySelector('.popup');

// Loop through each table (seat)
tables.forEach((item) => {
  item.addEventListener('click', () => {
    const tableNumber = item.textContent;
    const orderedCartList = JSON.parse(localStorage.getItem("orderItemData")) || [];

    if (orderedCartList.length > 0 && orderedCartList[0]) {
      const order = orderedCartList[0];

      // Build the popup content
      popup.innerHTML = `
        <div class="close" style="cursor:pointer;">
          <i class="fas fa-close"></i> <label>Close</label>
        </div>
        <div class="product-ctr">
          <div class="product-img">
            <img src="${order.img}" alt="">
          </div>
          <div class="product-dtls">
            <h1>${order.name}</h1>
            <p class="price">${order.price}</p>
            <p class="quantity">Quantity: ${order.qty}</p>
            <button class="pay-btn">Proceed to Pay</button>
            <p class="note">Sit and Sip - Coffee Comes to ${tableNumber}</p>
          </div>
        </div>
      `;

      // Show the popup
      popup.classList.add('show');

      // After DOM is injected, attach hover effect to pay button and image
      const payBtn = popup.querySelector('.pay-btn');
      const productImage = popup.querySelector('.product-img img');

      if (productImage && payBtn) {
        productImage.style.filter = 'drop-shadow(0 2px 3px)';

        payBtn.addEventListener('mouseenter', () => {
          productImage.style.filter = 'drop-shadow(0 3px 6px)';
        });

        payBtn.addEventListener('mouseleave', () => {
          productImage.style.filter = 'drop-shadow(0 2px 3px)';
        });
      }

      // Close the popup
      const closeBtn = popup.querySelector('.close');
      closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
      });

    } else {
      console.warn("No ordered item found in localStorage.");
    }
  });
});

const goback =document.querySelector('.labelback');
const arrow =document.querySelector('.fa-arrow-left');
goback.addEventListener('mouseenter',()=>{
  arrow.classList.add('hoverArrow');
});
goback.addEventListener('mouseleave',()=>{
  arrow.classList.remove('hoverArrow');
});
arrow.addEventListener('mouseenter',()=>{
  goback.classList.add('hoverlabel');
});
arrow.addEventListener('mouseleave',()=>{
  goback.classList.remove('hoverlabel');
});
