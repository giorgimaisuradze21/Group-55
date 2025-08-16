const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 },
  { name: "USB Cable", price: 10 }
];

const productNames = products.map(p => p.name);
console.log(productNames);

const productsQR = products.filter(p => p.price < 100);
console.log(affordableProducts);

const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log(totalPrice);

const productNameswillchange = products.reduceRight((acc, p) => acc ? acc + " - " + p.name : p.name, "");
console.log(productNameswillchange);