(() => {

  let userId: string | number | true;
  userId = 2;
  userId = 'sdad';
  userId = true;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log('Es string', myText.toLowerCase());
    } else {
      console.log('Es number', myText.toFixed(2));
    }
  }
  greeting('asd');
  greeting('asdsd');
  greeting(323.3213);

})();