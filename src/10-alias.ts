(() => {

  type UserID = string | number | boolean;

  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  // shirtSize = 'M';
  // shirtSize = 'XL';
  // shirtSize = 'assd';
  shirtSize = 'S';
  console.log(shirtSize);

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log('Es string', userId.toLowerCase());
    }
  }
  greeting(111, 'M')

})();