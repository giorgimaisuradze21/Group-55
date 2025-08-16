// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);

// const strings = ["cat", "banana", "dog", "apple"];
// const hasLongString = strings.some(str => str.length > 5);
// console.log(hasLongString);

// const nums = [1, 2, 3, 4];
// const doubledNumbers = [];
// nums.forEach(n => doubledNumbers.push(n * 2));
// console.log(doubledNumbers);

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 25 }
// ];
// const allAdults = users.every(user => user.age >= 18);
// console.log(allAdults);

// const products = [
//   { name: "Book", price: 15 },
//   { name: "Bag", price: 50 },
//   { name: "Pen", price: 5 }
// ];
// const hasAffordableProduct = products.some(product => product.price < 20);
// console.log(hasAffordableProduct);








// const customerOrders = [
//   {
//     orderId: 1,
//     items: [
//       { title: "JavaScript Basics", price: 15, quantity: 1 },
//       { title: "React Guide", price: 25, quantity: 2 }
//     ],
//     isDelivered: true
//   },
//   {
//     orderId: 2,
//     items: [{ title: "Node.js Handbook", price: 30, quantity: 1 }],
//     isDelivered: false
//   },
//   { orderId: 3, items: [], isDelivered: true }
// ];

// console.log(customerOrders.every(o => o.items.length > 0));
// console.log(customerOrders.some(o => !o.isDelivered));







// const students = [
//   { name: "Alice", grade: 92 },
//   { name: "Bob", grade: 76 },
//   { name: "Charlie", grade: 64 },
//   { name: "Diana", grade: 88 }
// ];

// const allPassing = students.every(s => s.grade >= 70);
// const hasFailing = students.some(s => s.grade < 65);

// students.forEach(s => console.log(`Student: ${s.name}`));

// const honorRoll = [];
// students.forEach(s => {
//   if (s.grade >= 90) honorRoll.push(s.name);
// });

// console.log(allPassing);
// console.log(hasFailing);
// console.log(honorRoll);
