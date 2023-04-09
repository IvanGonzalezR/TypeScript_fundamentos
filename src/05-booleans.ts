(() => {

  let isEnabled = true;
  // isEnabled = 's';
  // // isEnabled = 2;
  isEnabled = false;
  console.log(isEnabled);

  let isNew: boolean = false;
  console.log(isNew);

  const randomNum = Math.random();
  console.log(randomNum);
  isNew = randomNum >= 0.5 ? true : false;
  console.log(isNew);

})() //IIFE