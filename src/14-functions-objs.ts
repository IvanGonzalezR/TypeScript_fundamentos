(() => {

  const login = ({ email, password: pass }:
    { email: string, password: string }): void => {
    console.log(email, pass);
  }

  login({
    email: 'ivan@gamil.com',
    password: '123123',
  });

  type Size = 'S' | 'M' | 'L' | 'XL'
  const products: any[] = [];
  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  }) => {
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


})();