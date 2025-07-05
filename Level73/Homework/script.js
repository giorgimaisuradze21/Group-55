
let currentDate = new Date();
document.getElementById("current").textContent = currentDate.toString();

currentDate.setFullYear(2035);
currentDate.setMonth(0);
currentDate.setDate(1);
currentDate.setHours(10);
currentDate.setMinutes(45);

document.getElementById("modified").textContent = currentDate.toString();
