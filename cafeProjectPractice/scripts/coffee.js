const products = [
  {
    image: 'source/espresso.jpg',
    desc: {
      name: 'Espresso',
      about: 'Espresso Pure coffee shot, bold and intense.'
    },
    price: 60
  },
  {
    image: 'source/americano.jpg',
    desc: {
      name: 'Americano',
      about: 'Americano Espresso diluted with hot water.'
    },
    price: 70
  },
  {
    image: 'source/latte.jpg',
    desc: {
      name: 'Latte',
      about: 'Espresso with steamed milk, mild and creamy.'
    },
    price: 90
  },
  {
    image:'source/cappuccino.jpg',
        desc:{
        name:'Cappuccino',
        about:'Cappuccino Equal parts espresso, milk & foam. Rich flavor. '
        },
        price:80
  },
  {
        image:'source/Macchiato.jpg',
        desc:{
        name:'Macchiato',
        about:'Macchiato Espresso with a touch of milk foam. '
        },
        price:70
  },
  {
        image:'source/Mocha.jpg',
        desc:{
        name:'Mocha',
        about:'Mocha Chocolate-flavored latte — sweet and bold. '
        },
        price:100
  },
  {
        image:'source/Affogato_Scoop.jpg',
        desc:{
        name:'Affogato',
        about:'Affogato Scoop of ice cream topped with hot espresso. '
        },
        price:110
  },
  {
        image:'source/Irish.jpg',
        desc:{
        name:'Irish',
        about:'Irish Coffee, Coffee mixed with Irish whiskey and cream. '
        },
        price:130
  },
  {
        image:'source/Cortado.jpg',
        desc:{
        name:'Cortado',
        about:'Cortado Equal espresso and milk — balanced taste. '
        },
        price:80
  },
  {
        image:'source/Cold Brew.jpg',
        desc:{
        name:'Cold Brew',
        about:'Cold Brew Coffee brewed cold for 12+ hours — smooth. '
        },
        price:90
  },
  {
        image:'source/Nitro Cold Brew.jpg',
        desc:{
        name:'Nitro Cold Brew',
        about:'Nitro Cold Brew, Cold brew infused with nitrogen — creamy and fizzy. '
        },
        price:110
  },
  {
        image:'source/Iced.jpg',
        desc:{
        name:'Iced Coffee',
        about:'Iced Coffee Chilled coffee served over ice with optional milk. '
        },
        price:80
  },
  {    image:'source/turkish.png',
        desc:{
        name:'Turkish Coffee',
        about:'Turkish Coffee Unfiltered, thick and bold — served traditionally. '
        },
        price:90
    },
    {
        image:'source/doppio.png',
        desc:{
        name:'Doppio',
        about:'Doppio Double espresso shot — strong and intense. '
        },
        price:70
    },
    {
        image:'source/ristretto.png',
        desc:{
        name:'Ristretto',
        about:'Ristretto A shorter, more concentrated espresso shot. '
        },
        price:70
    },
    {
        image:'source/cafe au lait.png',
        desc:{
        name:'Café au Lait',
        about:'Café au Lait Brewed coffee with steamed milk — mild and simple. '
        },
        price:60
    },
    {
        image:'source/vienna.png',
        desc:{
        name:'Vienna',
        about:'Vienna Coffee Coffee topped with whipped cream — rich and creamy. '
        },
        price:90
    },
    {
        image:'source/flatwhite.jpg',
        desc:{
        name:'Flat White',
        about:'Flat White Silky microfoam milk with strong espresso base. '
        },
        price:90
    },
    {
        image:'source/blackcoffee.png',
        desc:{
        name:'black coffee',
        about:'black coffee-Strong and pure, brewed without milk. Bold flavor with deep, roasted aroma'
        },
        price:60
    }
//add any coffess items further

];

let productsHTML = '';
products.forEach((product) => {
  productsHTML += `
    <div class="card-ctr">
      <div class="card">
        <div class="img-section">
          <img src="${product.image}" alt="${product.desc.name}" />
          <div class="heart-ctr" onclick="toggleHeart(this);">🤍</div>
        </div>
        <div class="alert-cart">
          <p class="cart-response-label"></p>
        </div>
        <div class="details-section">
          <h1>${product.desc.name}</h1>
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
              <select id="qty">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div class="order-btn"><button>Order Now</button></div>
            <div class="add-to-cart-box">
              <button onclick="cartAlertMsg(this);" class="cart-btn">&#128722; Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
});

// Insert all cards into a container with class .ctr (assumed one outer wrapper)
document.querySelector('.ctr').innerHTML = productsHTML;

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
      const card = buttonElement.closest('.card'); // Find the card containing the button
      const alertMsg = card.querySelector('.cart-response-label'); // Target that card's message box
      setTimeout(() => {
        alertMsg.innerHTML = 'Adding...';
        alertMsg.style.display = 'block';

      setTimeout(() => {
      alertMsg.innerHTML = '<span style="color:green; font-weight:bold;"><i class="fas fa-check"></i></span> Added';
      alertMsg.style.display = 'block';
  
        setTimeout(() => {
              
              alertMsg.style.display = 'none'; //remove total alert message

      }, 1000);
    },2000);
  });
}

      // for ratings
      function setAllRatings(ratingDataList) {
      const starsInnerList = document.querySelectorAll('.stars-inner');
      const ratingCountList = document.querySelectorAll('.rating-count');
      ratingDataList.forEach((data,index)=> {
        const outOf5 = Math.round((data.rating/10)*5*10)/10;
        const percentage = (outOf5/5)*100;
        if(starsInnerList[index]){
          starsInnerList[index].style.width=`${percentage}%`;
        }
        if(ratingCountList[index]){
        ratingCountList[index].textContent = data.count;   
        }
      });
    }
    window.addEventListener('DOMContentLoaded',()=>{
      setAllRatings([
            {rating:8.6, count:85},
            {rating:8.4, count:125},
            {rating:8.5, count:81},
            {rating:8.7, count:45},
            {rating:8.4, count:65},
            {rating:8.6, count:57},
            {rating:8.7, count:32},
            {rating:8.6, count:88},
            {rating:8.0, count:99},
            {rating:7.0, count:89},
            {rating:6.5, count:90},
            {rating:9.5, count:43},
            {rating:8.5, count:66},
            {rating:6.0, count:25},
            {rating:7.9, count:78},
            {rating:8.9, count:99},
            {rating:9.0, count:80}
            
      ]);
    });

    //for cart count
        const cartButton = document.querySelectorAll('.cart-btn');
        const cartCount = document.querySelector('.cart-count');
        let tempCartCount = 0;
        cartButton.forEach((btn)=>{
          btn.addEventListener('click',()=>{
            tempCartCount++;
              setTimeout(()=>{
                if(tempCartCount>=10){
                  cartCount.textContent='9+';
                }
                else{
                  cartCount.textContent=tempCartCount;
                }
                //original count value stored in tempCartCount even after 9
              },3000);
          });    
        });
    //for favorites count
        function favUpdateCount(){
          let favCount = 0;
          const likeDisplay =document.querySelectorAll('.heart-ctr');
          const fCount =document.querySelector('.fav-count');
          likeDisplay.forEach((heart) =>{
            if(heart.textContent ==='❤️'){
              favCount++;
              if(favCount>=10){
                fCount.textContent = '9+';
              }
              else{
                 fCount.textContent=favCount;
              }
            }
          });
          //original count value stored in favCount even after 9
        }
        //top navigator
       let lastScrollTop = 0;
        const topNav = document.querySelector('.arrow-ctr');
        window.addEventListener('scroll',()=>{
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          if(currentScroll < lastScrollTop){
            topNav.classList.add('show');
          }
          else{
          topNav.classList.remove('show');
          }
          lastScrollTop = currentScroll <=0 ?0:currentScroll;
        });
