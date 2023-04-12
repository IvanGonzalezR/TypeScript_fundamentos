(() => {

  const calcTotal = (prices: number[]): string => {
    let total = prices.reduce((accum, current) => accum += current);
    return total.toString();
  }
  console.log(
    calcTotal([ 1, 2, 1, 1, 1 ])
  );
  // function hello(): string {
  //   return 'hello'
  // }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta}`);
  }
  printTotal([ 1, 2, 1, 1, 1 ]);
})();