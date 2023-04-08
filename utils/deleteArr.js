let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function deleteByIndex(arr, index) {
  let myArr = [...arr];

  return myArr.slice(0, index).concat(myArr.slice((index += 1)));
}

console.log(deleteByIndex(arr, 0));
console.log(arr);

// MESMA FUNÇÃO COM FILTER
/**
 * 
 function deleteByIndex(arr, position) {
  return arr.filter((_, index) => index !== position);
}
 */