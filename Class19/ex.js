// map is a form of  loop

// var names=['zXc','eef','zxczxcc']
// names.map(function(val,i){
// console.log(val,i);
//// console.log(val,i+1);

// });

// sync behaviour jab tk sara code excute hota javascript ka defultyy code ese chalta h

// function fun(){
//     console.log("hello")
// }
// fun()
// console.log("hey")

// asyn behaviur me jo code excute ho rha h toh baqi ka code phly hoga jo kaam ho rha function baat me excute hoga

// setTimeout(function(){

// console.log("haye")

// },3000);

// promises

// var name = "sharoz";
// function mypromise() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (name === "sharoz") {
//         resolve("succes");
//         // reject("succes")
//       } else {
//         reject("error");
//         // resolve("error")
//       }
//     },3000);
//   });
// }
// mypromise().then(function(res){
// console.log("then==>",res)
// })
// .catch(function(e){
// console.log("catch==>",e);
// })
// console.log("ssssss")

// var num = 1;
// function mypromise2() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (num === 1) {
//         resolve("succes");
//         // reject("succes")
//       } else {
//         reject("error");
//         // resolve("error")
//       }
//     },3000);
//   });
// }
// mypromise().then(function(res){
// console.log("then==>",res)
// })
// .catch(function(e){
// console.log("catch==>",e);
// })
// console.log("ssssss")



// 10 promise depend all promise



// var name = "sharoz";
// function mypromise() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (name === "sharoz") {
//         resolve("succes");
//         // reject("succes")
//       } else {
//         reject("error");
//         // resolve("error")
//       }
//     },3000);
//   });
// }
// mypromise().then(function(res){
// console.log("then==>",res)
// })
// .catch(function(e){
// console.log("catch==>",e);
// })
// console.log("ssssss")

// var num = 1;
// function mypromise2() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (num === 1) {
//         resolve("succes");
//         // reject("succes")
//       } else {
//         reject("error");
//         // resolve("error")
//       }
//     },3000);
//   });
// }
// mypromise().then(function(res){
// console.log("then==>",res)
// })
// .catch(function(e){
// console.log("catch==>",e);
// })
// console.log("ssssss")

// Promise.all([mypromise,mypromise2]).then(function(response){
// console.log(console.log("then",Response))
// })
// .catch(function(e){
//     console.log(console.log("e",e))
// })












// pwa prograssive web application
// sw.js se hi pwa ka kaam hota h 

// esk liya local server yani google chrome .servies worker

if("serviceWorker" in navigator){
// console.log("found")
navigator.serviceWorker.register('./sw.js')
.then(function(){
    console.log("server is working")
})


}
else{
    console.log("not found")
}

