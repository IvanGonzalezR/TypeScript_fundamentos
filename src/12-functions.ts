(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'L');
  console.log(producto1);
  console.log(producto1.size);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock?: number,
    size: Sizes = 'M'
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date());
  console.log(producto2);
  console.log(producto2.size);
  console.log(producto2.stock);

})();