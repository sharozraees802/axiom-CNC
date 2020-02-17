// 1
// var sentance = " i am live in hyderabad"
// var newsentance = sentance.replace("hyderabad","islamabad")
// document.write(newsentance)


// 2

// var num = "472"
// document.write(num,typeof(num) ,"<br>")
// var newnum = parseInt(num)
// document.write(num,typeof(newnum))

// 5

// var  num = 3.45214
// document.write("Number:",num,"<br>")
// document.write("round off:",Math.round(num),"<br>")
// document.write("floor:",Math.floor(num),"<br>")
// document.write("ceil:",Math.ceil(num),"<br>")

// 15
//var age = prompt("emter a age")
//var interger = parseInt(age)
//var year = 2019 - interger
//document.write("your birth year is ",year)

// 11

// var store = 0;
// var num = prompt("enter a nummber:")
// var le = num.toString().length
// var l = parseInt(le)
// for(var i=0; i<l; i++)
// {
// store = store + parseInt(num[i]) 
// }
// var mean = store / l
// document.write(mean)




function factorial(a){
    if (a < 1) {
        return 1       
    }
    return a * factorial(a -1)
}
var answer = factorial(3)
console.log(answer);