// /**
// |--------------------------------------------------
// | TASK 1
// |--------------------------------------------------
// */

// Write a program that writes the current date in the following format.
// ====> Tue Dec 03 2019

// Ans
// var now = new Date()
// console.log(now.toDateString())



// /**
// |--------------------------------------------------
// | TASK 2
// |--------------------------------------------------
// */

// Write a program that writes the current date in the following format.
// ====> Tue Dec 03 2019 14:53:48 GMT+0500 (Pakistan Standard Time)

//Ans
// var now = new Date()
// console.log(now)

// /**
// |--------------------------------------------------
// | TASK 3
// |--------------------------------------------------
// */

// What will be the output of the following program?

// const date = new Date();
// console.log("HOUR =======>", date.getHours());
// console.log("DAY =======>", date.getDay());
// console.log("MONTH =======>", date.getMonth());
// console.log("YEAR =======>", date.getFullYear())

// /**
// |--------------------------------------------------
// | TASK 4
// |--------------------------------------------------
// */

// What will be the output of the following program?

//Ans Wed Dec 06 2006
// const date = new Date();
// console.log(new Date(date.setFullYear(2006)).toDateString())


// /**
// |--------------------------------------------------
// | TASK 5
// |--------------------------------------------------
// */

// Write a function that takes a name as a parameter and append Mr. at the start of the name on console

// Ans
// var name = prompt('Enter Your Name')
// var prefix = "Mr. "
// function tellYourName(name, prefix){
//     console.log(name + prefix)
// }

// tellYourName(prefix, name)

// /**
// |--------------------------------------------------
// | TASK 6
// |--------------------------------------------------
// */

// Invoke the following function and determine the output. 

// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     console.log("Current time: " + theHr + ":" + theMin)
// }
// Ans Current time: 15:47
// tellTime()

// /**
// |--------------------------------------------------
// | TASK 7
// |--------------------------------------------------
// */

// Point out the incorrect form of writing a function in javascript 

// 1. myfunction() { }              ans
// 2. function myfunction() { }
// 3. func myfunction() { }         ans
// 4. myfunction = () => { }        ans


// /**
// |--------------------------------------------------
// | TASK 8
// |--------------------------------------------------
// */

// Write a function that takes an array as a parameter.
// The function's duty is to delete the last element from the array and return the array

// Ans
// var a = ["Bilal", "Sajjad", "Tehseen", "Umair"]
// function myFunc(del){
//     del.pop()
//     console.log(a)
// }

// myFunc(a)




// /**
// |--------------------------------------------------
// | TASK 9
// |--------------------------------------------------
// */

// Write a function that takes an argument.
// The function's duty is to check the arguments type and print the type
// For example if i pass in a string the function should print string on the console
// if i pass a number the console should print number


// Ans
// var a = prompt("Enter text here")

// function abc(nam){
//     if(nam !== ""){

//         console.log(typeof(parseInt(nam)))
//     }else{
//         console.log(typeof(nam))
//     }
         
// }

// abc(a)

// console.log(typeof(parseInt(a)))



// /**
// |--------------------------------------------------
// | TASK 10
// |--------------------------------------------------
// */
// Write a function that takes an array of numbers as a parameter and function's job
// is to multiply each element of an array by 2 and print it


// Ans
// var a = [1,2,3,4,5,6,7,8,9,10]

// function abc(n){

//  for(var i = 0; i < n.length; i++){

    
//     console.log(n[i]*2)        
// }

// }

// abc(a)





// /**
// |--------------------------------------------------
// | TASK 11
// |--------------------------------------------------
// */

// Write a function that does not get any arguments but should return a random id number if called against a variable 
// Example:
 
//  var id = generateId();
//  the generate function should generate a random id between 1 - 1000 and return it 

   
// /**
// |--------------------------------------------------
// | TASK 12
// |--------------------------------------------------
// */

// Write a function that takes in a string as an argument an the functions duty is to check the number of characters
// in a string a print it on the console

// var a = prompt("Write text here")

// function abc(count){
    
//     console.log(count.lenght)
// }

// abc(a)


// /**
// |--------------------------------------------------
// | TASK 13
// |--------------------------------------------------
// */
// write an arrow function that takes in a string as an argument and returns the string in uppercase letters.

// var a = prompt("Enter name here")

// function abc(up){
//     console.log(up.toUpperCase())
// }

// abc(a)

// /**
// |--------------------------------------------------
// | TASK 14
// |--------------------------------------------------
// */
// Write a function to sort an array of numbers in ascending or descending order

// var b = [2, 6, 7, 3, 7, 9, 8]

// function abc(sor){
//     console.log(sor.sort())
// }

// abc(b)

// /**
// |--------------------------------------------------
// | TASK 15
// |--------------------------------------------------
// */
// Write a function and the functions duty is to first check 
// if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome"  and return it
// if the argument passed is a number then it should be multiplied by the power of 2 and return it

// var text = prompt("Enter Text")

// function  abc(n){

//     if (n === ""){
//     console.log("Welcome" + " " + n)
//     }else{
//         b = parseInt(n)
//        console.log(b * b)

//     }
// }

// abc(text)


// /**
// |--------------------------------------------------
// | TASK 16
// |--------------------------------------------------
// */
// Write a function to round a number to a specified number of digits. when passed as an argument and return it
// Example: 
// roundNumber(4.6); 
// Expected Ouput: 5 ===> The number is rounded off 

// var n = +prompt()

// function abc(x){

//     var b = Math.round(x)

//     console.log(b)
// }

// abc(n)



function abc(){

    document.getElementById("para").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum facilis excepturi non ut ea, incidunt consequuntur enim? Ad accusamus temporibus alias quisquam tempore? Sapiente, neque dolor quas incidunt delectus consectetur."
}
