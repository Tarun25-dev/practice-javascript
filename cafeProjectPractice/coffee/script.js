const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const searchBox = document.getElementById('searchBox');
const centerTitle = document.getElementById('centerTitle');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

function toggleSearch() {
  const isOpen = searchBox.style.width === '150px';
  const isMobile = window.innerWidth <= 600;

  if (!isOpen) {
    searchBox.style.width = '150px';
    if (isMobile) centerTitle.classList.add('hidden');
  } else {
    searchBox.style.width = '0px';
    if (isMobile) centerTitle.classList.remove('hidden');
  }
}

function toggleHeart(el) {
  el.textContent = el.textContent === '🤍' ? '❤️' : '🤍';
  favUpdateCount();
}

function cartAlertMsg(buttonElement) {
  const card = buttonElement.closest('.card');
  const alertMsg = card.querySelector('.cart-response-label');

  setTimeout(() => {
    alertMsg.innerHTML = 'Adding...';
    alertMsg.style.display = 'block';

    setTimeout(() => {
      alertMsg.innerHTML = '<span style="color:green; font-weight:bold;"><i class="fas fa-check"></i></span> Added';
      alertMsg.style.display = 'block';

      setTimeout(() => {
        alertMsg.style.display = 'none';
      }, 1000);
    }, 2000);
  });
}

function updateCartCount() {

    const cartCountElement = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalItems >= 10) {
      cartCountElement.textContent = '9+';
    } else {
      cartCountElement.textContent = totalItems;
  }
   
}
 

function favUpdateCount() {
  let favCount = 0;
  const likeDisplay = document.querySelectorAll('.heart-ctr');
  const fCount = document.querySelector('.fav-count');
  likeDisplay.forEach((heart) => {
    if (heart.textContent === '❤️') {
      favCount++;
    }
  });
  fCount.textContent = favCount >= 10 ? '9+' : favCount;
};


let lastScrollTop = 0;
const topNav = document.querySelector('.arrow-ctr');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll < lastScrollTop) {
    topNav.classList.add('show');
  } else {
    topNav.classList.remove('show');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// --- PRODUCT DATA ---
const products = [
  {
    id: 'c1',
    image: '../source/espresso.jpg',
    desc: { name: 'Espresso', about: 'Espresso Pure coffee shot, bold and intense.' },
    price: 60
  },
  {
    id: 'c2',
    image: '../source/americano.jpg',
    desc: { name: 'Americano', about: 'Americano Espresso diluted with hot water.' },
    price: 70
  },
  {
    id: 'c3',
    image: '../source/latte.jpg',
    desc: { name: 'Latte', about: 'Espresso with steamed milk, mild and creamy.' },
    price: 90
  },
  {
    id: 'c4',
    image: '../source/cappuccino.jpg',
    desc: { name: 'Cappuccino', about: 'Cappuccino Equal parts espresso, milk & foam. Rich flavor.' },
    price: 80
  },
  {
    id: 'c5',
    image: '../source/Macchiato.jpg',
    desc: { name: 'Macchiato', about: 'Macchiato Espresso with a touch of milk foam.' },
    price: 70
  },
  {
    id: 'c6',
    image: '../source/Mocha.jpg',
    desc: { name: 'Mocha', about: 'Mocha Chocolate-flavored latte — sweet and bold.' },
    price: 100
  },
  {
    id: 'c7',
    image: '../source/Affogato_Scoop.jpg',
    desc: { name: 'Affogato', about: 'Affogato Scoop of ice cream topped with hot espresso.' },
    price: 110
  },
  {
    id: 'c8',
    image: '../source/Irish.jpg',
    desc: { name: 'Irish', about: 'Irish Coffee, Coffee mixed with Irish whiskey and cream.' },
    price: 130
  },
  {
    id: 'c9',
    image: '../source/Cortado.jpg',
    desc: { name: 'Cortado', about: 'Cortado Equal espresso and milk — balanced taste.' },
    price: 80
  },
  {
    id: 'c10',
    image: '../source/Cold Brew.jpg',
    desc: { name: 'Cold Brew', about: 'Cold Brew Coffee brewed cold for 12+ hours — smooth.' },
    price: 90
  },
  {
    id: 'c11',
    image: '../source/Nitro Cold Brew.jpg',
    desc: { name: 'Nitro Cold Brew', about: 'Cold brew infused with nitrogen — creamy and fizzy.' },
    price: 110
  },
  {
    id: 'c12',
    image: '../source/Iced.jpg',
    desc: { name: 'Iced Coffee', about: 'Chilled coffee served over ice with optional milk.' },
    price: 80
  },
  {
    id: 'c13',
    image: '../source/turkish.png',
    desc: { name: 'Turkish Coffee', about: 'Unfiltered, thick and bold — served traditionally.' },
    price: 90
  },
  {
    id: 'c14',
    image: '../source/doppio.png',
    desc: { name: 'Doppio', about: 'Double espresso shot — strong and intense.' },
    price: 70
  },
  {
    id: 'c15',
    image: '../source/ristretto.png',
    desc: { name: 'Ristretto', about: 'A shorter, more concentrated espresso shot.' },
    price: 70
  },
  {
    id: 'c16',
    image: '../source/cafe au lait.png',
    desc: { name: 'Café au Lait', about: 'Brewed coffee with steamed milk — mild and simple.' },
    price: 60
  },
  {
    id: 'c17',
    image: '../source/vienna.png',
    desc: { name: 'Vienna', about: 'Coffee topped with whipped cream — rich and creamy.' },
    price: 90
  },
  {
    id: 'c18',
    image: '../source/flatwhite.jpg',
    desc: { name: 'Flat White', about: 'Silky microfoam milk with strong espresso base.' },
    price: 90
  },
  {
    id: 'c19',
    image: '../source/blackcoffee.png',
    desc: { name: 'Black Coffee', about: 'Strong and pure, brewed without milk.' },
    price: 60
  }
];
localStorage.setItem("cartItems",JSON.stringify(products));
// Render products
let productsHTML = '';
products.forEach((product) => {
  productsHTML += `
    <div class="card-ctr" id="${product.id}">
      <div class="card">
        <div class="img-section">
          <img class="image" src="${product.image}" alt="${product.desc.name}" />
          <div class="heart-ctr" onclick="toggleHeart(this);">🤍</div>
        </div>
        <div class="alert-cart">
          <p class="cart-response-label"></p>
        </div>
        <div class="details-section">
          <h1 class="name">${product.desc.name}</h1>
          <p class="description">${product.desc.about}</p>
          <div class="rating-price-container">
            <div class="rating-box">
              <div class="star-rating">
                <div class="stars-outer">
                  <div class="stars-inner" style="width: 80%;"></div>
                </div>
                <span class="rating-count">4</span>
              </div>
            </div>
            <div class="price-box">INR : ₹${product.price}</div>
          </div>
          <div class="cart-controls">
            <div class="qty-box">
              <label for="qty">Qty</label>
              <select id="qty" class="selectQty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="order-btn"><button onclick="window.location.href='seats.html'";>Order Now</button></div>
            <div class="add-to-cart-box">
              <button class="cart-btn" data-coffee-id="${product.id}">&#128722; Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
});

 document.querySelector('.ctr').innerHTML = productsHTML;






// Add to cart button listeners
document.querySelectorAll('.cart-btn').forEach((button) => {
  button.addEventListener('click', function () {
    cartAlertMsg(this);
    const productId = this.dataset.coffeeId;
    addToCart(productId);
  });
});

// Ratings logic
function setAllRatings(ratingDataList) {
  const starsInnerList = document.querySelectorAll('.stars-inner');
  const ratingCountList = document.querySelectorAll('.rating-count');
  ratingDataList.forEach((data, index) => {
    const outOf5 = Math.round((data.rating / 10) * 5 * 10) / 10;
    const percentage = (outOf5 / 5) * 100;
    if (starsInnerList[index]) {
      starsInnerList[index].style.width = `${percentage}%`;
    }
    if (ratingCountList[index]) {
      ratingCountList[index].textContent = data.count;
    }
  });
}
window.addEventListener('DOMContentLoaded', () => {
  setAllRatings([
    { rating: 8.6, count: 85 },
    { rating: 8.4, count: 125 },
    { rating: 8.5, count: 81 },
    { rating: 8.7, count: 45 },
    { rating: 8.4, count: 65 },
    { rating: 8.6, count: 57 },
    { rating: 8.7, count: 32 },
    { rating: 8.6, count: 88 },
    { rating: 8.0, count: 99 },
    { rating: 7.0, count: 89 },
    { rating: 6.5, count: 90 },
    { rating: 9.5, count: 43 },
    { rating: 8.5, count: 66 },
    { rating: 6.0, count: 25 },
    { rating: 7.9, count: 78 },
    { rating: 8.9, count: 99 },
    { rating: 9.0, count: 80 }
  ]);
});

// Cart logic
const cart = [];

function addToCart(productId) {
  let matchingItem;

setTimeout(()=>{ 
    const productCard = document.getElementById(productId);
    const qtySelect = productCard.querySelector('.selectQty');
    const selectedQty = parseInt(qtySelect.value); 
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += selectedQty;
  } else {
    cart.push({ productId, quantity: selectedQty });
  }
  localStorage.setItem('cartData',JSON.stringify(cart));
  updateCartCount();
  console.log(cart);
  },3000);
};


const orderNowButtons = document.querySelectorAll('.order-btn button');

orderNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.card-ctr');
    const productImage = product.querySelector('.image').src; // we need only that clicked url image
    const productName = product.querySelector('.name').textContent;
    const productPrice = product.querySelector('.price-box').textContent;
    const productQty = parseInt(product.querySelector('.selectQty').value);

    const cart1=[
      { img:productImage,
        name:productName,
        price:productPrice,
        qty:productQty
      }
    ];
    localStorage.setItem('orderItemData',JSON.stringify(cart1));

  });
});