/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {

  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

forEach([1, 2, 3], (el) => console.log(el))
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array,fn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
      newArray.push(fn(array[i], i, array));
  }
  return newArray;
}

map([1, 2, 3], (el) => el ** 2)

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  initial = typeof initial !== 'undefined' ?  b : 'false';
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += fn(array[i], i, array);
  }
  return sum;
}

reduce([1, 2, 3], (all, current) => all + current)

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let result = [];
  let keys = Object.keys(obj).toUpperCase();
  result.push(keys);
  return result;
}
upperProps({ name: 'Сергей', lastName: 'Петров' });

//второй вариант

function upperProps(obj) {
  let result = [];
  for (let keys in obj) {
    keys = keys.toUpperCase();
    result.push(keys);
  }
  return result;
}
upperProps({ name: 'Сергей', lastName: 'Петров' });


/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {}

export { forEach, map, reduce, upperProps, createProxy };
