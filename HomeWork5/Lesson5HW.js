console.log('task2')

class CustomString{
  constructor(string){
    this.string = string
  }

rev () {
   let str = this.string
    return str.split('').reverse().join('')
  };

ucf () {
    let str1 = this.string
     return str1.charAt(0).toUpperCase() + str1.slice(1);
   };

ucw () {
    let str2 = this.string
    return str2.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');  
   };
}
  const myString = new CustomString('qwerty');
  console.log(myString.rev());

  const myString1 = new CustomString('qwerty');
  console.log(myString1.ucf());

  const myString2 = new CustomString('qwerty qwerty qwerty');
  console.log(myString2.ucw());





console.log('task3')




class Validator{

constructor(stringtest){

this.stringtest = stringtest
}

  checkIsEmail(){
    let search = this.stringtest
    if(search.includes('@')){
    return true
    }
    else{
      return false
    }
  }

  checkIsDomain(){
    let search1 = this.stringtest
    if(search1.includes('google.com')){
    return true
    }
    else{
      return false
    }
 }
  
 checkIsPhone(){
  let search2 = this.stringtest
  if(search2.substr(1, 2).includes('38')){
    return true
    }
    else{
      return false
    }

 }

}

const test = new Validator('vasya.pupkin@gmail.com');
console.log(test.checkIsEmail());

const test1 = new Validator('vasyagmail.com');
console.log(test1.checkIsEmail());

const test2 = new Validator('vasya.pupkin@google.com');
console.log(test2.checkIsDomain());

const test3 = new Validator('vasya.pupkin@gmail.com');
console.log(test3.checkIsDomain());

const test4 = new Validator('+49 066-949-18-79');
console.log(test4.checkIsPhone());

const test5 = new Validator('+38-066-949-18-79');
console.log(test5.checkIsPhone());



console.log('task1')



const studentArr = [{
  name: 'Сергей',
  surname: 'Войлов',
  ratingPoint: 1000,
  schoolPoint: 1000,
  course: 2,
},
{
  name: 'Татьяна',
  surname: 'Коваленко',
  ratingPoint: 880,
  schoolPoint: 700,
  course: 1,
},
{
  name: 'Анна',
  surname: 'Кугир',
  ratingPoint: 1430,
  schoolPoint: 1200,
  course: 3,
},
{
  name: 'Станислав',
  surname: 'Щелоков',
  ratingPoint: 1130,
  schoolPoint: 1060,
  course: 2,
},
{
  name: 'Денис',
  surname: 'Хрущ',
  ratingPoint: 1000,
  schoolPoint: 990,
  course: 4,
},
{
  name: 'Татьяна',
  surname: 'Капустник',
  ratingPoint: 650,
  schoolPoint: 500,
  course: 3,
},
{
  name: 'Максим',
  surname: 'Меженский',
  ratingPoint: 990,
  schoolPoint: 1100,
  course: 1,
},
{
  name: 'Денис',
  surname: 'Марченко',
  ratingPoint: 570,
  schoolPoint: 1300,
  course: 4,
},
{
  name: 'Антон',
  surname: 'Завадский',
  ratingPoint: 1090,
  schoolPoint: 1010,
  course: 3
},
{
  name: 'Игорь',
  surname: 'Куштым',
  ratingPoint: 870,
  schoolPoint: 790,
  course: 1,
},
{
  name: 'Инна',
  surname: 'Скакунова',
  ratingPoint: 1560,
  schoolPoint: 200,
  course: 2,
},
];


class Student{

  constructor(studentArr = []){
    Object.assign(this, studentArr);
       
  }
  

getinformaion (){

if(this.ratingPoint >= 800){
  return console.log(`${this.name} ${this.surname}, Вы попали на бюджет`);
}

else{
  return console.log(`${this.name} ${this.surname},Вы попали на контракт`);
}
}

}

const user = new Student({name: 'Инна', surname: 'Скакунова', ratingPoint: 1560});
console.log(user.getinformaion());





