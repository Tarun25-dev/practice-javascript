const product ={
    name: 'basketball',
    price:2095
}
console.log(product.price);
product.price +=500;
console.log(product.price);
product['delivery-time']='3days';
console.log(product['delivery-time']);

//how to repeat a string many times ('test' 2 times => 'testtest')
let name='Tarun'.repeat(2);
console.log(name);