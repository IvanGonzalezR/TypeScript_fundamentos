(() => {
  type Size = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  }

  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'product 2',
    createdAt: new Date(),
    stock: 20,
  })
  addProduct({
    title: 'product 3',
    createdAt: new Date(),
    stock: 2,
    size: 'XL'
  })
  console.log(products);
  products.push({
    title: 'product 3',
    createdAt: new Date(),
    stock: 2,
    // size: 'XL' (opcional)
  });

})();