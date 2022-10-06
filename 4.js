function printNumbersInterval() {
   let i = prompt("Введите начальное число");
   let b = prompt("Введите конечное число");
   let timerId = setInterval(function() {
   console.log(i);
   if (i == b) clearInterval(timerId);    //очищаем когда достигаем конечного значения
   i++;
   }, 1000);   //прибавляем по 1 каждую секунду
   }
   
printNumbersInterval();