// // int, float
// 9, 10, 78, 8.8, 9.8, 5, 6.8
// // string
// "Felipe", "92873942387834", "234151$&#&/!/!"
// // object JSON
// var obj = {
//  "key": "value",
//  8: 6,
//  7: "kajsdlkfjasd",
//  2: {
//   9: 1
//  }
// }

// var count = 0;
// var count_float = 0.7;
// var count_string = "Count";
// var count_obj = { c: 1 };

// var num_4 = 0;

"use strict";

var num_4 = 20;

function suma(s1, s2, s3, s4)
{
 // s4 = undefined
 return s1 + s2 + s3 + s4;
}

var count; // undefined

console.log("count is " + count);

function resta(r1, r2, r3)
{
 return r1 - r2 - r3;
}

console.log("Número 4 es " + num_4);

var resultado_suma = suma(5, 4, 40);
var resultado_resta = resta(100, 10, 5); // 85

console.log("Número 4 es " + num_4);
console.log("Resultado de la suma es " + resultado_suma);
console.log("Resultado de la resta es " + resultado_resta);

if(0 > 1){
 console.log("Verdadero!!");
} else {
 console.log("Falso!!!");
}

var tipo_de_carro = "Chevi";

if(tipo_de_carro === "Shuru"){ // 0 > true, 0 false, < 0 true
 console.log("Mi carro es un shuru");
} else if(tipo_de_carro === "Chevrolet"){
 console.log("Mi carro es un chevrolet");
} else if(tipo_de_carro === "Honda"){
 console.log("Yo soy feliz con mi honda");
} else {
 console.log("Yo soy infeliz")
}

var _boolean = true;

function change_boolean(){
 _boolean = 0;
}

change_boolean();

if(_boolean){
 console.log("Si soy un -8");
}

switch(tipo_de_carro){
 case "Shuru": console.log("Mi carro es un shuru"); break;
 case "Chevrolet": console.log("Mi carro es un chevrolet"); break;
 case "Honda": console.log("Yo soy feliz con mi honda"); break;
 default: console.log("Yo soy infeliz"); break;
}
