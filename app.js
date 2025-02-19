
// Function defination
function hello(){
    console.log("hello");
}

// hello();  // function call
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();

function printName(){
    console.log("Mazhar Mehmood");
    console.log("age = 21");
}


// printName();

function print1To10(){
    for(let i = 1; i<= 10; i++){
        console.log(i);
    }
}

// print1To10();

function poem(){
    console.log("Twinkle twinkle little star");
    console.log("How I wonder what you  are");
    console.log("Whats above the world so high");
    console.log("Like a diomand in the sky");
}

poem();

function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();
rollDice();
 // Argument function
 function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`)
 }

 printInfo("Mazhar Mehmood",21);
 printInfo("Mazhar");

 // function to find averae of 3 numbers
 function average(a,b,c){
    console.log((a + b + c)/ 3);
 }
 average(2,6,4);

//funcion to print a table

function table(n) {
    for (let i = 0; i <= n * 10; i += n) {
        console.log(i);
        
    }
}

table(73);

// return keyword in function

function sum(a,b){
    return a + b;
}

console.log(sum(3 , 5 ));


// create a function that returns the sum from 1 to n;
let total = 0
function totalSum(num) {
    for (let i = 1; i <= num; i++){
        // total = total + i;
       total += i;
    }
    return total;
}
console.log(totalSum(7));

// create a function that returns all the concatenation of the strings in an array.
let str = ["hi", "hello", "bye", "!"];
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];   
    }
    return result;
}

console.log(concat(str));


// highetr order function
function multiGreet(func, n) {    // higher order function
    for (let i = 1; i <= n; i++) {
        func();
    }
}

let greet = function (){
    console.log("Hello");
}

multiGreet(greet, 3);
multiGreet(function() {console.log("Asslamu Alikum")}, 4);



// let odd = function (n) {
//     console.log(!(n % 2 == 0))   // return true when number is odd
// }

let even = function(n){    // return true when number is even
    console.log(n % 2 == 0)
}
// odd(5);
// even(2);

// high order function 

let oddOrEvenFactory = function(request){
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0))   // return true when number is odd
        }
    }else if(request == "even"){
        return function(n){    // return true when number is even
            console.log(n % 2 == 0)
        }
    }
    else{
        console.log("Wrong request");
    }

}

let request = "odd";
oddOrEvenFactory(request);
