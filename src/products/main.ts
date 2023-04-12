import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'product 2',
  createdAt: new Date(),
  stock: 5,
})
addProduct({
  title: 'product 3',
  createdAt: new Date(),
  stock: 6,
  size: 'XL'
})

console.log(products);
const total = calcStock();
console.log(total);
