// function modifyArray(Array1, Array2) {
//   let concatArray = Array1.concat(Array2);
//   concatArray.copyWithin(concatArray.length - 2, 0, 2);
//   concatArray.fill(0, concatArray.length - 3);
//   let lastElement = concatArray.pop();
//   let firstElement = concatArray.shift();
//   concatArray.unshift(10, 20);

//   return {
//     modifiedArray: concatArray,
//     lastElement,
//     firstElement
//   };
// }