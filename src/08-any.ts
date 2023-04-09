(() => {

  let myDanamicVar: any;
  myDanamicVar = 20;
  myDanamicVar = 'sass';

  myDanamicVar = 'Hola';
  const rta = (myDanamicVar as string).charAt(2);

  myDanamicVar = 1212;
  const rta2 = (<number>myDanamicVar).toFixed();
})()