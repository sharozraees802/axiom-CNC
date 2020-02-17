// /**
// |--------------------------------------------------
// | TASK 1
// |--------------------------------------------------
// */
// Write a function that takes in an array of country names as the first argument, the second argument
// is the length of characters, the functions duty is to find a country name that is equal to the length provided.
// give the length and array yourself 

// example =======> 
// var countries = ["Pakistan", "India", "Paris", "Afghanistan", "Turkey"]
// // checkLength(countries, 6) //Should return a country that has 6 letters in its name

// // Ans
// function abc(){
    
//     var b = countries
//     var c = 6
//     for(var i = 0; i < b.length; i++)

//     if(b[i].length === c){

//         console.log(b[i]+ " " + c)

//     }
   
// }
//  abc()


// /**
// |--------------------------------------------------
// | TASK 2
// |--------------------------------------------------
// */
// write a function that takes in two arguments; 
// The first argument should be an array  of number if no array is provided default array of numbers can be used by the function itself
// the second argument should be a single digit from within the array 

// the function should return the array or print it but it should not contain the number which was passed as a second argument 

// var a = [2,4,6,8,10]
// var digit = 8
// var c = a.indexOf(digit)

// a.splice(c,1)

// console.log(a)


// /**
// |--------------------------------------------------
// | TASK 3
// |--------------------------------------------------
// */
 
 
//  <div id="myDiv">
//     <p>Southern Cal is sunny.</p>
//     <p>Northern Cal is rainy.</p>
//     <p>Eastern Cal is desert.</p>
//  </div>

// use the html code given above and print the children of "myDiv" on the console

// Ans

// console.log(document.getElementById("myDiv").children)



// /**
// |--------------------------------------------------
// | TASK 4
// |--------------------------------------------------
// // */
//  <div id="myDiv">
//     <p>Southern Cal is sunny.</p>
//     <p>Northern Cal is rainy.</p>
//     <p>Eastern Cal is desert.</p>
// </div>

// use the html code given above and print the child Nodes of "myDiv" on the console 


// Ans 
// console.log(document.getElementById("myDiv").childNodes)

// /**
// |--------------------------------------------------
// | TASK 5
// |--------------------------------------------------
// */
//  <div id="myDiv">
//     <p>Southern Cal is sunny.</p>
//     <p>Northern Cal is rainy.</p>
//     <p>Eastern Cal is desert.</p>
// </div>

// using the code given above what will be the output of the following javascript code
// Ans  Southern Cal is sunny

// console.log(document.getElementById("myDiv").childNodes[1].childNodes[0].nodeValue)




// /**
// |--------------------------------------------------
// | TASK 6
// |--------------------------------------------------
// */
//  <div id="myDiv">
//     <p>Southern Cal is sunny.</p>
//     <p>Northern Cal is rainy.</p>
//     <p>Eastern Cal is desert.</p>
// </div>

// using the code given above what will be the output of the following javascript code

// Ans Southern Cal is sunny

//  console.log(document.getElementById("myDiv").childNodes[1].childNodes[0].nodeValue)
 
//  /**
// |--------------------------------------------------
// | TASK 7
// |--------------------------------------------------
// */
//  <div id="myDiv">
//     <p>Southern Cal is sunny.</p>
//     <p>Northern Cal is rainy.</p>
//     <p>Eastern Cal is desert.</p>
// </div>

// using the code given above what will be the output of the following javascript code

//  Ans Northern Cal is rainy

        //  var elem = document.getElementById('myDiv');
        //  var secondChild = elem.children[1];
        //  console.log(secondChild.childNodes[0].nodeValue)

//  /**
// |--------------------------------------------------
// | TASK 8
// |--------------------------------------------------
// */
//  Using javascript. make the following paragraph's color red 
 
//          <p id="myPara">This paragraph should be red</p>

//Ans 
// console.log(document.getElementById("myPara").style.color="red")



//  /**
// |--------------------------------------------------
// | TASK 9
// |--------------------------------------------------
// */
//  Using javascript. check if the paragraph tag written below has the attribute "randomAttr" And print true or false on console
 
//         <p id="myPara" randomAttr="random">This paragraph should be red</p>
        
            //    console.log(document.getElementById('myPara').hasAttribute("randomAttr")) 
//  /**
// |--------------------------------------------------
// | TASK 10
// |--------------------------------------------------
// */
//  Using javascript. create an attribute on the following paragraph tag
 
//         <p>This paragraph should be red</p>

 
        
//  /**
// |--------------------------------------------------
// | TASK 11
// |--------------------------------------------------
// */
//  Using javascript and browser events. when mouse is clicked on this paragraph it should vanish
 
//         <p id="myPara" >This paragraph should be red</p>
        
    
       
//  /**
// |--------------------------------------------------
// | TASK 12
// |--------------------------------------------------
// */
//  which of the following are not junk artifacts on DOM
 

//  1. #text 
//  2. <p>         ans
//  3. <empty spaces> 
 
//   /**
// |--------------------------------------------------
// | TASK 13
// |--------------------------------------------------
// */
//  In the context of DOM which is the parent. 
 
//  1. window
//  2. Document  -------> ans
//  3. DOCTYPE html 
//  4. <br>
 
  
// /**
// |--------------------------------------------------
// | TASK 13
// |--------------------------------------------------
// */
// considering there is a paragraph or a heading written in our body tag, then the code below will be able to access it?

// window.document.children[0].children[1].children[0]