const product ={
    name: 'basketball',
    price:2095
};
console.log(product.price);
product.price +=500;
console.log(product.price);
product['delivery-time']='3days';
console.log(product['delivery-time']);

//Create a function 'comparePrice(productl, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.

let lessExpensive;
const product1={
    name:'socks',
    price:150
};
const product2={... product1,
    price :200
};
function comparePrice(product1,product2){
   lessExpensive = product1.price>product2.price?product2.price:product1.price;
   console.log(lessExpensive)
}
comparePrice(product1,product2);

//how to repeat a string many times ('test' 2 times => 'testtest')
let name='Tarun'.repeat(2);
console.log(name);
