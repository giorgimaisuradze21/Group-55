// let  numsArray = [1, 2, 3];
// let strArray = ["a", "b", "c"];

// let combinedArray = numsArray.concat(strArray);
// combinedArray.copyWithin(4, 0, 3);
// combinedArray.fill("filled", 2, 5);
// combinedArray.pop();
// combinedArray.shift();
// combinedArray.unshift(100, 200);

// console.log(combinedArray);




// let people = [
//   { name: 'Alice' },
//   { name: 'Bob' }
// ];
// let places = [
//   { city: 'Paris' },
//   { city: 'London' }
// ];

// let mergedArray = people.concat(places);
// mergedArray.copyWithin(2, 0, 2);
// mergedArray.fill({ city: 'New York' }, mergedArray.length - 2);
// mergedArray.pop();
// mergedArray.shift();
// mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });

// console.log(mergedArray);





// let maxArray = [1, 2, 3, 'four', 5];

// let extendedArray = maxArray.concat([true, false]);
// noramlArray.copyWithin(0, 2, 4);
// noramlArray.fill(0, 4, 7);
// noramlArray.pop();
// noramlArray.shift();
// noramlArrayy.unshift(null, undefined);

// console.log(noramlArray);


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8];

// let mergedArray = arr1.concat(arr2);
// maxArray.copyWithin(5, 0, 3);
// maxArray.fill(0, 6);
// maxArray.pop();
// maxArray.shift();
// maxArray.unshift(100, 200);
// maxArray.splice(2, 2, ...arr3);
// let slicedArray = maxArray.slice(-5);
// let joinedString = slicedArray.join(',');



// let students = ["Alice", "Bob", "Charlie"];
// let grades = [85, 90, 78];

// function addStudent(name, grade) {
//   students.unshift(name);
//   grades.unshift(grade);
//   return { students, grades };
// }

// function removeLastStudent() {
//   students.pop();
//   grades.pop();
//   return { students, grades };
// }

// function replaceGrade(index, newGrade) {
//   grades.splice(index, 1, newGrade);
//   return grades;
// }

// function updateGrades(value) {
//   grades.fill(value);
//   return grades;
// }



// let playlist = ["Song A", "Song B", "Song C", "Song D"];

// function addSong(title) {
//   playlist.unshift(title);
//   return playlist;
// }

// function removeLastSong() {
//   playlist.pop();
//   return playlist;
// }

// function moveSongs() {
//   playlist.copyWithin(playlist.length - 2, 0, 2);
//   return playlist;
// }

// function combinePlaylists(secondPlaylist) {
//   return playlist.concat(secondPlaylist);
// }


// let cartItems = ["Milk", "Bread", "Eggs"];
// let prices = [1.5, 2.0, 3.0];

// function addItem(item, price) {
//   cartItems.unshift(item);
//   prices.unshift(price);
//   return { cartItems, prices };
// }

// function removeFirstItem() {
//   cartItems.shift();
//   prices.shift();
//   return { cartItems, prices };
// }

// function replaceItem(index, newItem, newPrice) {
//   cartItems.splice(index, 1, newItem);
//   prices.splice(index, 1, newPrice);
//   return { cartItems, prices };
// }

// function createReceipt() {
//   return cartItems.join(", ");
// }

// function applyDiscount(discountPrice) {
//   prices.fill(discountPrice);
//   return prices;
// }



// let library = [
//   { title: "Book A",  },
//   { title: "Book B",  },
//   { title: "Book C",  }
// ];

// function addBook(book) {
//   library.push(book);
//   return library;
// }

// function removeLastBook() {
//   library.pop();
//   return library;
// }

// function updateBookCopies(title, newCopies) {
//   const index = library.findIndex(book => book.title === title);
//   if (index !== -1) {
//     library.splice(index, 1, { ...library[index], copies: newCopies });
//   }
//   return library;
// }

// function listBooks() {
//   return library.map(book => book.title).join(", ");
// }

// function extractBooks() {
//   return library.slice(0, 2);
// }

// function modifyBooks() {
//   library.copyWithin(library.length - 1, 0, 1);
//   return library;
// }

// function resetCopies(copies) {
//   library.forEach((book, i) => {
//     library[i] = { ...book, copies };
//   });
//   return library;
// }

// function removeFirstBook() {
//   library.shift();
//   return library;
// }

// function addFirstBook(book) {
//   library.unshift(book);
//   return library;
// }