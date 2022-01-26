// task1

let table = document.createElement("table");
table.className = "tab"

document.body.append(table);

for (let i = 1; i <= 10; i++) {
    let tr = document.createElement("tr");
    tr.className = "block"

    table.appendChild(tr);

    for (let j = 1; j <= 10; j++) {
        let td = document.createElement("td");
        td.className = "td"

        tr.appendChild(td);
        td.innerText = i * j;
    }
}


// Task 2

const arr = [1, 1, 2, 2, 3];

function getUnique() {
  return Array.from(new Set(arr));
}

const newArr = getUnique(arr); 

console.log(newArr);


// task 3

(function () {

  function sum (val) {

    var temp = val;

    sum = function() {
          var arg = arguments[0] ? arguments[0] : 0;
          return temp = temp + arg;
      };
      return sum();
  }
  console.log(sum(3)); 
  console.log(sum(8)); 
  console.log(sum(4)); 
})();


// Task 4

function Calculator() {

  this.read = function () {
    this.x = +prompt('Введите первое значение');
    this.y = +prompt('Введите второе значение');
  };

  this.setAction = function () {
    let condition = prompt('Введите 1 если хотите суммировать значения \nВведите 2 если хотите умножить значения \nВведите 3 если хотите отнять значения \nВведите 4 если хотите разделить значения \nВведите 5 если хотите возвести в куб сумму значений \nВведите 6 если хотите получить значение кубического корня первого числа');


    this.doAction = function () {
      if (condition == 1) {
        return console.log('Сумма равняется: ' + (this.x + this.y));
      };

      if (condition == 2) {
        return console.log('Произведение равняется: ' + (this.x * this.y));
      };

      if (condition == 3) {
        return console.log('Разница равняется: ' + (this.x - this.y));
      };

      if (condition == 4) {
        return console.log('Деление равняется: ' + (this.x / this.y));
      };

      if (condition == 5) {
        return console.log('Куб суммы двух введенных чисел равняется: ' + ((this.x + this.y) ** 3));
      };

      if (condition == 6) {
        return console.log('кубический корень первого числа равняется: ' + Math.cbrt(this.x));
      };

    }

  }
}

let calculator = new Calculator();
calculator.read();
calculator.setAction();
const tres = calculator.doAction();
console.log(tres);






