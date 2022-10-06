function asd() {

   let arr = [0, -2, 1, 5, 0, 4, 5, "a", ",", 0, 108];
   let length = arr.length;
   let countEven = 0;
   let countOdd = 0;
   let count0 = 0;
   
   for (let i = 0; i < length; i++) {  
      let n = arr[i];
      if (n % 2 == 0) if (n != 0) if (n != null) {   
         countEven++;   //прибавляем к переменной 1 если есть такое условие
      }
   
      if (n % 2 == 1) {                       
         countOdd++;
      }
   
      if (n == 0) {
         count0++;
      }
   }
   
   console.log("Количество четных - " + countEven);
   console.log("Количество не четных - " + countOdd);
   console.log("Количество нулей - " + count0);
   }
   
   asd();