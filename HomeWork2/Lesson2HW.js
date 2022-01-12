
let arr = ['Вася','Петя','Вова','Олег'];
console.log(arr);



function hello2(name){   

    if (name === 'Василий')
    console.log('Привет, Василий');
    else
    console.log('Привет, гость');
}

hello2('Василий');



function addOneForAll(...numbers){
    let arr = [...numbers];
    let newArr = arr.map((el) => el + 1); 
    console.log(newArr);
}
addOneForAll(1,2,3,4);



let i = 0;
 
while (true) {
  let r = Math.random();
 
  i++;
 
  if (r > 0.9) {
    console.log(`${r}, ${i}`);
    break;
  }
}



let numbers = [1, 2, 3, 4];
let cubes = new Array;

for (i in numbers) {
    cubes[i] = Math.pow(numbers[i], 3);
}

console.log(cubes);



let cell = ''
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        (i + j) % 2 ? cell += '#': cell += '!'
    }
    cell += '\n'
} 
console.log(cell)























