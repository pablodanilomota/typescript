"use strict";
/**
 * String
 */
var personalName = 'Pablo';
console.log(personalName);
/**
 * Automaticamente entende como string.
 * Type implícito é string,
 * mesmo que não tenha sido declarado.
 */
//personalName = 28
/**
 * Number
 */
var age = 27;
//age = 'Ana'
age = 27.5;
console.log(age);
/**
 * Boolena
 */
var isFalse = false;
//isFalse = 1
console.log(isFalse);
/**
 *  Explicit types
 */
var myAge;
myAge = 27;
console.log(typeof myAge);
//myAge = '27'
console.log(myAge);
/**
 * Arrays
 */
var hobbies = ['Cozinhar', 'Praticar esporte'];
console.log(hobbies[1]);
console.log(typeof hobbies);
hobbies = [100];
//hobbies = 100
console.log(hobbies);
/**
 * Tupla
 * Define array índice por índice.
 */
var endereco = ['Av. Pricipal', 99, ''];
console.log(endereco);
endereco = ['Av. Pricipal', 99, 'eita'];
console.log(endereco);
/**
 * Enum
 */
var Color;
(function (Color) {
    Color[Color["grey"] = 0] = "grey";
    Color[Color["green"] = 100] = "green";
    Color[Color["blue"] = 10] = "blue";
    Color[Color["orange"] = 11] = "orange";
    Color[Color["yellow"] = 12] = "yellow";
    Color[Color["red"] = 100] = "red";
})(Color || (Color = {}));
var myColor = Color.green;
console.log(myColor);
console.log(Color.blue);
console.log(Color.orange, Color.yellow);
console.log(Color.green, Color.red);
/**
 * Any
 */
var car = 'BMW';
console.log(car);
car = {
    brand: 'BMW',
    year: 2019
};
console.log(car);
