let num = [1, 6, 4, 5, 4, 3, 2, 1];

let newArr = [];
for (let i = 0; i < num.length; i++) {
  if (newArr.includes(num[i])) {
    continue;
  } else {
    newArr.push(num[i]);
  }
}
console.log(`Initial array is [${num}]`);
console.log(`The array with unique elements is : [${newArr}]`);
console.log(num.indexOf(1));

const newArr1 = new Set(num);
console.log(newArr1);
