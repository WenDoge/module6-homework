// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

let a = +prompt('vvedite 1 chislo');
let b = +prompt('vvedite 2 chislo');
setInterval( () =>
{
   if (a <= b)
    {
      console.log(a);
      a++
    }
}, 1000, a ,b);