(() => {

  // let myNumber: number;
  // let myString: string;

  //any  
  let myNull = null;
  let myUndefined = undefined;

  let myNull2: null = null;
  let myUndefined2: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 23;

  let myName: string | undefined = undefined;
  myName = 'Kikin';

  // function hi(name: string | null) {
  //   let hello = 'Hola ';
  //   if (name) {
  //     hello += 'Kikin';
  //   } else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // }

  function hi(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('assa');
  hi(null);

})();