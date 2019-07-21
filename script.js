'use strict';
let soldier = { 
    health: 500,
    armor: 300,
    exp: 250
};

let Vasya = {
    health: 100
};

Vasya.__proto__ = soldier; 
console.log(Vasya); 
console.log(Vasya.armor);
