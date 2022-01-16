
console.log ('task1');

let a = 4;
let b = 0;

    for (let i = 1; i <= a; i++) {
        b += i ** 2   
    }

console.log (b);


console.log ('task2');


function avg2(a,b) {
    let c = (a + b) / 2
    console.log(c);
}
avg2(5,3);



console.log ('task3');

let arr = [[1,6,3,'6'], [10,15,13,'10']]

let param1 = arr[0].find(el => el % 2 == 0);
let param2 = arr[1].find(el => el % 2 == 0)

console.log(param1 + param2);


console.log ('task5');

let answer

do {
    answer = confirm();
} while (answer === false)


console.log ('task6');

let arr1 = [3, 5, 9, -11];

const sum = arr1.reduce((acc, value) => acc + value, 0);
const ubivanie = arr1.sort((a, b) => b - a);
const resultSort = arr1.filter(item => item > 0)

console.log(sum);
console.log(ubivanie);
console.log(resultSort);


console.log ('task7 $$ task8');


let user = new Date(1987, 12, 31); 

let now = new Date(); 

let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 

let usernow = new Date(today.getFullYear(), user.getMonth(), user.getDate()); 

let age; 
age = today.getFullYear() - user.getFullYear();

if (today < usernow) {
    age = age-1;
  }

let month;
month = age * 12

let day;
day = month * (7 * 31) + (4 * 30) + (1 * 28) + Math.floor(age / 4)

let hours;
hours = day * 24

let minutes;
minutes = hours * 60

let ms;
ms = minutes * 60000

console.log(`Количество лет: ${age}`);
console.log(`Количество месяцев: ${month}`);
console.log(`Количество дней: ${day}`);
console.log(`Количество часов: ${hours}`);
console.log(`Количество минут: ${minutes}`);
console.log(`Количество милисекунд: ${ms}`);


    
     





























