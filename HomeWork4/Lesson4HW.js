
 
  let secondUser = {
    firstName: "Artem",
    sayHi(message) {
      console.log(`${message}, ${this.firstName}!`);
    }
  };
  let someMessage = "some message";
  
  let funcSayHi = secondUser.sayHi.bind(secondUser,someMessage);
  funcSayHi();
  

  let funcSayHiCall = secondUser.sayHi;
  funcSayHiCall.call(secondUser,someMessage);




console.log('task2');

let sum = function() {
  return [].reduce.call(arguments, function(result, current) {
    return result + current;
  }, this.sum);
};

let bindedSum = sum.bind({ sum: 10 }, 20, 30, 80);
console.log(bindedSum()); 




console.log('task3');

  const valObject0 = {        
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
  };
  
    function getNewArray(){
       
      let filtered = valObject0.values.filter((x) => typeof x === "number").filter((x) => x > 2).filter((x) => x < 10).filter((x) => x % 2 == 0);
        return filtered
    }
      console.log(getNewArray(this.values));



