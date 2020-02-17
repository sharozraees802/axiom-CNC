/**
|--------------------------------------------------
| TASK 1
|--------------------------------------------------
// *


// var obj = {
//     name: 'Umair',
//     profession: 'developer', 
//     age: 21, 
//     skills: { 
//         Coding: ['react', 'javascript', 'nodejs']; 
//         Design: { 
//             Platform: ['android', 'ios']
//         }
//     }
// }

// // Use the above object and the output should be as following in the console.

// // "Hello my name is umair i'm a developer my skills in Coding are: react, javascript, nodejs, and i design apps for android and ios"

// // Use bracket notation to extract values from an object;

// //Ans

// console.log("hello my name is" + obj['name'] + "i'm a " + obj[profession] + "my skills in codding are:" + obj[skills].Coding + "and i design app for " + obj[skills].Design.Platform)

/**
|--------------------------------------------------
| TASK 2
|--------------------------------------------------
*/

// var obj = {
//     name: 'Umair',
//     profession: 'developer', 
//     age: 21, 
//     skills: { 
//         Coding: ['react', 'redux', "docker", "GraphQL", "Gatsby" 'nodejs', "Express"]; 
//         Design: { 
//             Platform: ['android', 'ios']
//         }
//     }
// }

// Use the above object and the output should be as following in the console.

// Hello my name is umair age: 21, im a developer and my skills include {print all the skills in coding key} and i design apps for android and ios

// Use Dot Notation to extract information from object


//Ans
// console.log("hello my name is" + obj.name + "i'm a " + obj.profession + "my skills in codding are:" + obj.skills.Coding + "and i design app for " + obj.skills.Design.Platform)

/**
|--------------------------------------------------
| TASK 3
|--------------------------------------------------
*/

// var arrayOfObjects = [
//     { name: 'Umair', age: 22, profession: "MERN Stack Developer and DevOps Engineer" },
//     { name: 'Asad', age: 22, profession: "MERN Stack Developer" },
//     { name: 'Osama', age: 22, profession: "MERN Stack Developer + SQL expert" }
// ]

// // Use the array of objects given above and perform iterations. On each iteration 
// // print the name, age and the profeesion of the corresponding object

// //Ans 

// for(var i = 0; i < arrayOfObjects.length; i++){
//     console.log("Name:" +  arrayOfObjects[i].name + " " + "Age:" + arrayOfObjects[i].age + " " + "Profession: " + arrayOfObjects[i].profession)
// }

// /**
// |--------------------------------------------------
// | TASK 4
// |--------------------------------------------------
// */

// var Books = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// Take the above array of objects and print the output as following 
// "{Book Name} {Author Name} {Reading Status}" on each iteration

// Ans 

// for(var i = 0; i < Books.length; i++){
//     console.log("Book Name: " + Books[i].title + ";  " + "Author Name: " + Books[i].author + ";  " + "Reading Status: "+ Books[i].readingStatus + ";")
// }

// console.table(Books)

/**
|--------------------------------------------------
| TASK 5
|--------------------------------------------------
*/

// var keys = ["name", "age", "profession"]
// var values = ["umair", 22, "Developer"];

// create a dynamic object using keys and values array above

// var dyn = {
//     name: "Umair",
//     age: 22,
//     profession: "Developer",
// }

// console.log(dyn)


/**
|--------------------------------------------------
| TASK 6
|--------------------------------------------------
*/

// var peopleArray = [
//     { id: 123, name: "dave", age: 23 },
//     { id: 456, name: "chris", age: 23 },
//     { id: 789, name: "bob", age: 23 },
//     { id: 101, name: "tom", age: 23 },
//     { id: 102, name: "tim", age: 23 }
// ]

// write a function whose duty is to perform a search operation on the given array 
// of objects and return the the object whose id was matched 

// example ======> 
// searchData("123") // Should return an object if found in the array

// Ans

// function ser(anyId){
// for(var i = 0; i < peopleArray.length; i++){
//     if( peopleArray[i].id === anyId){
       
//         console.log(peopleArray[i])
//     }
// }
// }
// ser(101)


/**
|--------------------------------------------------
| TASK 7
|--------------------------------------------------
*/

// var peopleArray = [
//     { id: 123, name: "dave", age: 23 },
//     { id: 456, name: "chris", age: 23 },
//     { id: 789, name: "bob", age: 23 },
//     { id: 101, name: "tom", age: 23 },
//     { id: 102, name: "tim", age: 23 }
// ]

// Print the above array in the form of a table on console

// Ans
// console.table(peopleArray)

// for(var i = 0; i < peopleArray.length; i++){

//     console.log(peopleArray[i].id + " " + peopleArray[i].name + " "+ peopleArray[i].age)
// }



/**
|--------------------------------------------------
| TASK 8
|--------------------------------------------------
*/

// var name = "umair"
// var profession = 'MERN Stack Developer'
// var age = 22;

// var obj = { name, age, profession }


// Is the code written above correct, if yes then justify your answer

//Ans

// var obj = {
//     name: "Umair",
//     profeesion: "MERN Stack Developer",
//     age: 22,
// }

// console.log(obj)

/**
|--------------------------------------------------
| TASK 9
|--------------------------------------------------
*/

// Create an object constructor

//Ans
// function Plan() {
//     name = "Bilal"
//     age = 34
//     profession = "Job"
//    }

//  console.log(Plan())

/**
|--------------------------------------------------
| TASK 10
|--------------------------------------------------
*/

// var list = ["Learn React", "Learn Nodejs", "Learn New things"];

// Using the list of items above. create the following DOM structure using javascript 

// <div id="myDiv">
//     <ul id="myList">
//         <li>Learn React</li>
//         <li>Learn Nodejs</li>
//         <li>Learn New things</li>
//     </ul>
// </div>

// var dv = document.createElement("div")
// var ap_dv = document.body.appendChild(dv)
// var unOrderList = document.createElement("ul")
// ap_dv.appendChild(unOrderList)
// var listItem1 = document.createElement("li")
// var listItem2 = document.createElement("li")
// unOrderList.append(listItem1, listItem2)
// listItem1.append("Home")
// listItem2.append("Contact")
// console.log(ap_dv)



