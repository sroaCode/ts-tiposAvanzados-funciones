const prices : (number | string) [] = [1,2,3,4,5,6,'2','5'];
prices.push(1);
prices.push('1');

//definicion de tuplas - permite crear arreglos fuertemente tipados;
let userTupla:[string,number,boolean];

//No me permite agregar mas valores de los ya definidos
userTupla = ['nicolas',15,true];
userTupla = ['sad2',4,false];

//destructuring de una tupla
const [username,age] = userTupla;
console.log(username);
console.log(age);



