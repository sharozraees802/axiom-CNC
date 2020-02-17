// qno1
// var d  = new Date()
// console.log(d.toDateString())

 
// qno2


// var d = new Date("2019-12-06")
// console.log(d)

// var d = new Date()
// console.log(d)


// qno3
// const date = new Date();
// console.log("hour"+date.getHours())
// console.log("day"+date.getDay())
// console.log("month"+date.getMonth())
// console.log("of the ayear"+date.getFullYear())

// qno4
// const date = new Date();
// console.log(new Date(date.setFullYear(2019)).toDateString())

// qno5

// function myfunt(name){
//     var p ="Mr."
//     console.log(p+name)
// }
// var name = prompt("enter a name:")
// myfunt(name)


// qn6



// function tellTime() {

//         var now = new Date();
    
//         var theHr = now.getHours();
    
//         var theMin = now.getMinutes();
    
//         console.log("Current time: " + theHr + ":" + theMin)
    
//     }
// tellTime()

// qno7
// myfunction() { }
// function myfunction() { }  //t

// func myfunction() { }
// myfunction = () => { } ///f


// qno8
// var arry =[1,2,3,4,5,6,7,10]
// function del(arry){
//      arry.pop()
    //console.log(arry)
    // return arry
// }

// del(arry)
// console.log(del(arry))

// qno9

// function type(TYPES)
// {
//     var s = typeof(TYPES)
     // console.log(s)
    

// }
// var naam ="sharoz"
// var  num = 10332233388
// type(num)
// type(naam)


// qno10

// var array =[1,2,3,4,5,6,7,10]
// function mul(array){
// for (let i = 0; i < array.length; i++) {
//    console.log(array[i]*2)
     
// }

// }

// mul(array)



// qno11


// function generateId(){
//     var id = Math.random(1)*1000
//     return Math.round(id)
// return Math.round(Math.random(1)*1000)

// }

// var id = generateId();
// console.log(id)

// qno12

//  

// qno 13

// var s = prompt("enter a word")
// function upercase(s){
//      console.log(s.toUpperCase())
// }
// upercase(s)




// qn14

// function ascending_Sort(Array)
// {
    
//     for (var i = 0; i < Array.length; i++) {
        
//         for (var j = 0; j < Array.length-1; j++)
//         {
//             if (Array[j] > Array[j+1])
//             {
//                 var temp = Array[j];
//                 Array[j] = Array[j+1];
//                 Array[j+1] = temp;
                
//             }
//         }
//     }
//     return Array; 
// }

// function descending_Sort(Array1){

//     for (var i = 0; i < Array1.length; i++) {
        
//         for (var j = 0; j < Array1.length-1; j++)
//         {
//             if (Array1[j] < Array1[j+1])
//             {
//                 var temp = Array1[j];
//                 Array1[j] = Array1[j+1];
//                 Array1[j+1] = temp;
                
//             }
//         }
//     }
//  return Array1; 

// }
// var Array =[10,9,8,7,6,5,4,3,2,1,0]
// var Array1 =[10,60,133,500,99,89,78,499,765,345,524]

// var A = ascending_Sort(Array)
// console.log(A)

// var D = descending_Sort(Array1)

// console.log(D)


// qno15




// qno16


// function myroun(num){
//     console.log(Math.round(num))
// }

// myroun(4.6)

// function myroun(num){
//     return Math.round(num)
// }

// console.log(myroun(4.6))