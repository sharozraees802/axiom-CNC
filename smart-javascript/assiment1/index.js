//QNo1
// const getNum = num => {
//   num = num + "";
//   return num
//     .split("")
//     .reverse()
//     .join("");
//  };
// console.log(getNum(1234567))

//Qno2

//  const names = ["sharoz","raees","zohaib"];

// // filter ko character length k sath searching karta hh
// const getarray = (namearr,len)=>{

//     const filtered = namearr.filter(item=>item.length===len);
//     console.log(filtered);

// };

// getarray(names,6)

// Qno3
//check number in a array match the item placed warna deleted
// const deletearray =(noarra,digit)=>{
//     const filtered = noarra.filter(item => {
//         return item !== digit
//     })
//     console.log(filtered)
// }
// const numarray = [1,2,3,4,5,6]
// deletearray(numarray,5)

// Qno4
// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 1508000 }
// ];

//const athletincomestring = athleteData.map(item=>`${item.athlete} in ${item.team} earned ${item.income} euros `);
//console.log(athletincomestring)

//Qno5

// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
// ];

// const result = athleteData.map(item=> item.income.toString().length>7);
// console.log(result);

// Qno6

// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
// ];

// const result = athleteData.filter(item=>item.income>10000000).map(item =>`${item.athlete} is a greate players`);
// console.log(result);

// Qno 7

// const upperFunc = (firstVal, secondVal) => {
//     const obj = {
//         myFunc: () => ({
//             name: firstVal,
//             age: secondVal
//         })
//     }

//     return obj
// }

// console.log(upperFunc('Umair', 20).myFunc())

// Qno8 part B
// const arrayOfCourses = [
//   {
//     id: "CNC123",
//     courseName: "Cloud Native Computing"
//   },

//   {
//     id: "IOT123",
//     courseName: "Internet of things"
//   },
//   {
//     id: "AI123",
//     courseName: "Artificial Intelligence"
//   }
// ];
// const passedCourses = ["CNC123", "AI123"];

// for (let i = 0; i < passedCourses.length; i++) {
//     for (let j = 0; j< arrayOfCourses.length; j++) {
//         if (passedCourses[i]===arrayOfCourses[j].id) {
//             console.log(`your are pass ${arrayOfCourses[j].id} ${arrayOfCourses[j].courseName}`)
//         }

//     }

// }

//Qno9

// const arr = [
//   { id: 1, name: "umair" },
//   { id: 2, name: "asad" }
// ];

// const index = 2;
// const newObj = { id: 4, name: "shahbaz" };

// arr[index] = { ...newObj };

// console.log(arr);

//TASK 11
// const data = [
//   { name: "Umair", Amt: 100 },
//   { name: "Asad", Amt: 150 }
// ];
// add
//const openaccount = (accountname, amount = 100) =>
//data.concat({ name: accountname, Amt: amount });
//console.log(openaccount("sharoz", 200),openaccount("zohaib"));

// remove

//const remove = accountname => data.filter(item => item.name !== accountname);
//console.log(remove("Umair"));

// search

// const find = (acountname = "", amount = 0) =>
//   data.filter(item => item.name === acountname || item.Amt === amount);
// console.log(find("", 100));
// console.log(find("Asad"));

// Qno11

// const week = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];
// let a = new Date();
// console.log(week[a.getDay()]);
