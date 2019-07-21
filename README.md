# O.O.P.
 let soldier: есть глобальный класс soldier у него есть ряд умений(параметров),
  
  появляется новый "солдат": let Vasya = health: 100, при помощи Vasya.__proto__ = soldier установил, что он является потомком
  глобального класса soldier + своё умение.
  
console.log(Vasya); //вася унаследовал всё от soldier + своё умение.
console.log(Vasya.armor); // берем это свойство из прототипа soldier.
  
