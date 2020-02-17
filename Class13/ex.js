// var date = new Date();
// // var y = date.setFullYear(2006)
// var m = date.setMonth(6)
// // console.log(m)
// console.log(new Date(m).toLocaleDateString())



// FUNCTION

// function myfunction(){
//     var name ="umair"
//     var age = 22
//     if (age <18 || name !== "umair")
//     {
//         console.log("eligiable")
//     }
//     else
//     {
//         console.log("not eligibble")
//     }

// }

// myfunction()


// var myage = 16;
// function isstudenteligible(age)
// {
//     if(age<18)
//     {
//                 console.log("eligiable")
//             }
//             else
//             {
//                 console.log("not eligibble")
//             }
        
// }

// isstudenteligible(myage)
// isstudenteligible(23)
// isstudenteligible(33)
// isstudenteligible(15)







// var myage = 16;
// var n = "sharoz"
// function isstudenteligible(age,name)
// {
//     console.log("hey", name)
//     if(age<18)
//     {
//                 console.log("eligiable")
//             }
//             else
//             {
//                 console.log("not eligibble")
//             }
        
// }

// isstudenteligible(myage,n)
// isstudenteligible(23,"zubair")


// function myname(name)
// {
//     // console.log("mr.",name)
//     document.write("mr. ",name)
// }
// var n = prompt("enter a name:")
// myname(n)



// function newage(age)
// {
//     return age + 10
// }

// var n = newage(20)
// console.log(n)



// function newage(age)
// {
//    var newage = age + 10
//     var a =[newage , 10]
//     return a
// }

// var n = returnDataFromnewage(10)
// console.log(n)



var newvar = 10;
function checkscope()
{
    var newvar1 = 20;
    console.log("f",newvar)
}
checkscope()
console.log("w",newvar)