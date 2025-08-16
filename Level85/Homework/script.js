// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "Diana" }
// ];
// const userWithId3 = users.find(u => u.id === 3);
// console.log(userWithId3);

// const colors = ["red", "green", "blue", "yellow"];
// colors.reverse();
// console.log(colors);

// const prices = [100, 50, 200, 75];
// prices.sort((a,b) => b - a);
// console.log(prices);

// const str = "Hello";
// const characters = Array.from(str);
// console.log(characters);

// const data1 = [1,2,3];
// const data2 = "Hello";
// const isData1Array = Array.isArray(data1);
// const isData2Array = Array.isArray(data2);
// console.log(isData1Array, isData2Array);


// const courses = [
//   { id: "CS101", name: "Intro to CS", students: [{name:"Alice", grades:[80,90]}, {name:"Bob", grades:[70,60]}], isActive:true, capacity:40, credits:3 },
//   { id: "MA201", name: "Calculus", students: [{name:"Charlie", grades:[85,95]}, {name:"Diana", grades:[60,75]}], isActive:true, capacity:25, credits:4 },
//   { id: "PH301", name: "Physics", students: [{name:"Eve", grades:[90,92]}], isActive:false, capacity:30, credits:3 }
// ];

// const studentNamesString = "Alice,Bob,Charlie,Diana,Eve";

// console.log(Array.isArray(courses), Array.isArray(studentNamesString));

// const allStudentNames = Array.from(studentNamesString.split(","));
// console.log(allStudentNames);

// courses.forEach(c => console.log(`Course ID: ${c.id}, Name: ${c.name}`));

// const courseNames = courses.map(c => c.name);
// console.log(courseNames);

// const courseAverages = courses.map(c => ({
//   id: c.id,
//   average: c.students.flatMap(s => s.grades).reduce((a,b)=>a+b,0)/c.students.flatMap(s=>s.grades).length
// }));
// console.log(courseAverages);

// const activeCourses = courses.filter(c => c.isActive);
// console.log(activeCourses);

// const calculusCourse = courses.find(c => c.id==="MA201");
// console.log(calculusCourse);

// courses.forEach(c => {
//   const allAbove70 = c.students.every(s => s.grades.some(g => g >= 70));
//   console.log(`All students in ${c.name} have at least one grade >=70: ${allAbove70}`);
// });

// console.log(courses.some(c => c.capacity < 30));

// const coursesByCapacity = [...courses].sort((a,b)=>a.capacity-b.capacity);
// console.log(coursesByCapacity);

// coursesByCapacity.reverse();
// console.log(coursesByCapacity);

// const totalCredits = activeCourses.reduce((a,c)=>a+c.credits,0);
// console.log(totalCredits);

// const activeCourses21 = activeCourses.reduceRight((acc,c)=>acc?acc+" - "+c.name:c.name,"");
// console.log(activeCourses21);