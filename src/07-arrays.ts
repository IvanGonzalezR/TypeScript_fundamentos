(() => {

  let prices = [ 13, 232, 13, 412, 4, 's', true ];
  prices.push(2222);

  let products: (number | string | boolean)[] =
    [ 13, 's', true ];

  // En forma de tuplas.                
  let products2: [ number, string, boolean, number ] =
    [ 13, 's', true, 22 ];

  products.push('jkjk');
  console.log(products);


  let numbers = [ 1, 2, 31, 34, 123, 3, 2 ];
  numbers.map(item => item * 2);
})()