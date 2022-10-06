function sum(x) {             
   return function(y) {       //возвращаем функцию внутри функции
      return x + y;
   };
}
console.log(sum(5)(10));     //первые скобки - это вызов sum. Вторые - вызов функции, которая была создана внутри sum