function primeNumber(num) {
   if (num <= 1) {
      console.log("Введите число больше 1");
   }
   for (let i = 2; i <= num; i++) {
      if (num > 1000) {
         console.log("Введите число меньше 1000");
         break;
      }
      else if (num === 1) {
         console.log("0 не является простым числом и не является составным");
         break;
      }
      else if (num % i === 0) {
         console.log("Не простое число");
         break;
      } else if (num % i != 0) {
         console.log("Простое число");
         break;
      }
   } 
}
primeNumber(1100);