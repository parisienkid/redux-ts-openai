const numberArray = [5, 754, 3, -3, 55];

let newNumberArray = [];

function getMinimal(array) {
  let currentMinimal = array[0];
  array.forEach(item => {
    if (item < currentMinimal) {
      currentMinimal = item;
    }
  });
  return currentMinimal;
}


while (numberArray.length !== 0) {
  newNumberArray.forEach((item, i) => {
    if (item === getMinimal(numberArray)) {
      newNumberArray.push(item);
      numberArray.splice(i, 1)
    }
  });
}

console.log(newNumberArray)