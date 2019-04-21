'use strict';
let soldier = { //есть глобальный класс soldier
    health: 500,
    armor: 300,
    exp: 250
};

let Vasya = {
    health: 100
};

Vasya.__proto__ = soldier; //Вася является потомком soldier
console.log(Vasya); //вася унаследовал всё от soldier + своё умение
console.log(Vasya.armor); // берем ето свойство из прототипа soldier