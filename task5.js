// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.

let x = +prompt('vvedite 1 chislo');
let n = +prompt('vvedite 2 chislo');
const result = (a, b) => (a && b > 0) ? console.log(a**b) : console.log('vi vveli ne naturalnoe chislo');
result(x,n);