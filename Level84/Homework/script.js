// const users = [
//   { name: "Alice", email: "alice@example.com" },
//   { name: "Bob", email: "bob@example.com" },
//   { name: "Charlie", email: "charlie@example.com" }
// ];

// const formattedEmails = users.map(u => `<${u.email}>`);
// console.log(formattedEmails);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squaredEvens = numbers.filter(n => n % 2 === 0).map(n => n * n);
// console.log(squaredEvens);

// const items = [
//   { name: "Book", price: 10, quantity: 2 },
//   { name: "Pen", price: 2, quantity: 10 },
//   { name: "Notebook", price: 5, quantity: 3 }
// ];
// const totalValue = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
// console.log(totalValue);

// const words = ["world", "the", "Hello"];
// const reversedSentence = words.reduceRight((acc, w, idx) => acc ? acc + " " + w : w, "") + ".";
// console.log(reversedSentence);






// const studentData = [
//   { id:1,name:"Alice",grades:{Math:[90,95],Science:[85,88],History:[80,82]},attendance:[true,true,false,true],extracurricular:["Debate Team","Soccer"] },
//   { id:2,name:"Bob",grades:{Math:[60,65],Science:[70,68],History:[72,75]},attendance:[true,false,true,false],extracurricular:[] },
//   { id:3,name:"Charlie",grades:{Math:[100,100],Science:[95,90],History:[85,80]},attendance:[true,true,true,true],extracurricular:["Debate Team"] }
// ];

// studentData.forEach(s => console.log(`Hello, ${s.name}!`));

// const studentNames = studentData.map(s => s.name);
// console.log(studentNames);

// const studentAverages = studentData.map(s => ({ name:s.name, average: Object.values(s.grades).flat().reduce((a,b)=>a+b,0)/Object.values(s.grades).flat().length }));
// console.log(studentAverages);

// console.log(studentAverages.filter(s=>s.average>=85));
// console.log(studentData.filter(s=>Object.values(s.grades).some(arr=>arr.every(n=>n<70))));
// console.log(studentData.reduce((acc,s)=>acc+s.extracurricular.length,0));

// const subjectAvg = Object.entries(studentData.reduce((a,s)=>{for(let k in s.grades){(a[k]||(a[k]=[])).push(...s.grades[k])} return a},{ })).reduce((max,[k,v])=>v.reduce((x,y)=>x+y,0)/v.length > max.avg ? {sub:k,avg:v.reduce((x,y)=>x+y,0)/v.length}:max,{sub:"",avg:0}).sub;
// console.log(subjectAvg);

// console.log(studentData.reduceRight((acc,s)=>s.extracurricular.includes("Debate Team") ? (acc?acc+" and "+s.name:s.name):acc,""));
// console.log(studentData.every(s=>s.attendance.filter(Boolean).length>=s.attendance.length/2));
// console.log(studentData.some(s=>s.extracurricular.length===0));

// studentData.forEach(s=>{for(let sub in s.grades)s.grades[sub].forEach(score=>{if(score===100)console.log(`Congratulations, ${s.name}, for achieving a perfect score in ${sub}!`)})});