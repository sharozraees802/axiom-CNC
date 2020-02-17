// var firsname = ["sharoz ","tariz ","AASIR "]
// var lastname = ["ahmed "," bajwa "," ali"]
// var fullname = []

// for (var i = 0; i < firsname.length; i++) {
//     for (let j = 0; j < lastname.length; j++) {
//         fullname .push(firsname[i] + lastname[j])
        
//     }
    
// }
// console.log(fullname)






// var name = "sharoz"
// var NAME = "SHAROZ"
// if(name.toUpperCase()=== NAME)
// {
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }


// var myname ="raees"
// console.log(myname.charAt(0).toUpperCase() + "aees")


// var n = "sharoz raees"
// console.log(n.indexOf("z"))

// var n = "sharoz raees"
// console.log(n.lastIndexOf("z"))


// var mytext = "sharoz r"
// for(var i=0; i<mytext.length; i++)
// {

// console.log(i,mytext[i])

// }


// var mysentance = "i'm doing my work"
// var newsentance = mysentance.replace("work","game")

// console.log(newsentance)
// var i ,j;
// for(i = 0; i<=5;i++)
// {
//     for(j = 0; j <=i;j++)
//     {
//         document.write("*")
//     }
//     document.write('<br />')
// }



// var mynumber = 20.6
// console.log(Math.round(mynumber))

// var mynumber = 20.6
// console.log(Math.floor(mynumber))

// var mynumber = 20.6
// console.log(Math.ceil(mynumber))

// var roundedNum = Math.floor(1.9);
// console.log(roundedNum)

// var n = Math.random(20) * 20;
// var s = Math.round(n)
// console.log(s)

// var n = Math.random(20) * 20;
// var s = Math.round(n)
// console.log(s.toFixed(2))


// var mynamenuumber = "22";
// var s  = parseInt(mynamenuumber)
// console.log(typeof(s))

// var s = "233";
// console.log(Number(s))

// var mydate = new Date()
// console.log(mydate.toDateString())

// var mydate = new Date()
// console.log(mydate.toLocaleDateString())

// var mydate = new Date()
// console.log(mydate.toTimeString())

// var mydate = new Date()
// console.log(mydate.getDay())


// dayynames = ["sun","mon,","tue",'wed',"thu","fri","sat"]
// var now = new Date()
// var theday = now.getDay();
// var nameoftoday = dayynames[theday]
// console.log(nameoftoday)



dayynames = ["mon","sat,","tue",'wed',"thu","fri","sun"]
var now = new Date()
var theday = now.getDay();
var nameoftoday = dayynames[theday]
console.log(nameoftoday)