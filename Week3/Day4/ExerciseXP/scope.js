// #1
function funcOne() {
  let a = 5;
  if(a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// if a is declared with let, a = 3
// if a is declared with const, there will be an error about changing a const

//#2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// there will be two alerts with a = 0 and a = 5
// if a is declared with const, there will be an error about changing a const


//#3
function funcFour() {
  window.a = "hello";
}


function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
//in the result there will be "inside the funcFive function hello"


//#4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// there will be alert with "inside the funcSix function text"
// if the variable is declared with const nothing would change, because the variables are in different scopes

//#5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//There gonna be two alerts: "in the if block 5" and "outside of the if block 2", because those variables are in different scopes
// if the variable is declared with const nothing would change, because the variables are in different scopes