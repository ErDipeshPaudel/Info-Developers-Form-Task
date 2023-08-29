// const input = {
//   1: {
//     id: 1,
//     name: "John",
//     children: [
//       { id: 2, name: "Sally" },
//       {
//         id: 3,
//         name: "Mark",
//         children: [
//           { id: 4, name: "Harry" },
//           { id: 10, name: "jutta" },
//         ],
//       },
//     ],
//   },

//   5: {
//     id: 5,
//     name: "Mike",
//     children: [
//       { id: 6, name: "Peter" },
//       { id: 7, name: "sudip" },
//     ],
//   },
// };

// outputObj = {};

// for (let i in input) {
//   // console.log(input[i]?.name);
//   outputObj = {
//     ...outputObj,
//     id: input[i]?.id,
//     name: input[i]?.name,
//     children: x.push(input[i]?.children[i]?.id),
//   };

//   console.log(outputObj);

//   if (input[i]?.children?.length) {
//     hasChildren(input[i]?.children);
//   }
// }

// function hasChildren(child) {
//   child.forEach((el) => {
//     // console.log(el?.name);
//     outputObj = {
//       ...outputObj,
//       id: el?.id,
//       name: el?.name,
//       children: x.push(el?.children?.id),
//     };
//     console.log(outputObj);

//     if (el?.children?.length) {
//       hasChildren(el?.children);
//     }
//   });
// }
//output
// {
//     '0': { id: 1, name: 'John', children: [ 2, 3 ] },
//     '1': { id: 2, name: 'Sally' },
//     '2': { id: 3, name: 'Mark', children: [ 4, 10 ] },
//     '3': { id: 4, name: 'Harry' },
//     '4': { id: 10, name: 'jutta' },
//     '5': { id: 5, name: 'Mike', children: [ 6, 7 ] },
//     '6': { id: 6, name: 'Peter' },
//     '7': { id: 7, name: 'sudip' }
// }

// First Lecture
// let obj = {
//   1: {
//     id: 1,
//     name: "sudip",
//     children: [
//       {
//         id: 3,
//         name: "messi",
//         children: [
//           {
//             id: 6,
//             name: "thiago messi",
//             children: [
//               {
//                 id: 7,
//                 name: "thiago junior",
//                 children: [
//                   {
//                     id: 8,
//                     name: "messi ko nati",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 4,
//         name: "ronaldo",
//         children: [
//           {
//             id: 5,
//             name: "ronaldo js",
//           },
//         ],
//       },
//     ],
//   },
//   2: {
//     id: 2,
//     name: "dipesh",
//   },
// };

// outputObj = {};

// for (let i in obj) {
//   console.log(obj[i]?.name);
//   if (obj[i]?.children?.length) {
//     hasChildren(obj[i]?.children);
//   }
// }

// function hasChildren(child) {
//   child.forEach((ele) => {
//     console.log(ele?.name);
//     if (ele?.children?.length) {
//       hasChildren(ele?.children);
//     }
//   });
// }

// Second Lecture
let obj = {
  20: { name: "sudip" },
  23: { name: "ronaldo" },
};

newObj = {};

for (let index in obj) {
  const newObjLength = Object.keys(newObj).length;
  newObj[newObjLength] = { ...obj[index], children: [] };
}

for (let index in newObj) {
  for (let i = 0; i < 2; i++) {
    newObj[index]["children"].push(i);
  }
}

// // console.log(Object.keys(obj).length)
console.log(newObj);

// console.log(input);

// const { 1: id1, 5: id2 } = input;
// console.log(id1);

// const { children } = id1;
// console.log(children);

// console.log(children.length);
// console.log(children[0]);

// const { x, y } = children;
// console.log(x);
// const house = {
//   room: [1],
//   name: "dipeesh",
// };
// const { room, name } = house;
// console.log(room);

// for (let [keys, values] of Object.entries(input)) {
//   console.log(keys, values);

//   for (let [k, v] of Object.entries(values)) {
//     console.log(v);

//     // for (let [i,j] of Object.entries(v))
//   }
// }

// let inputKeys = Object.keys(input);
// console.log(inputKeys);

// Object.keys(input).forEach((key) => {
//   console.log(key, input[key]);
// });

// for (const key of Object.keys(input)) {
//   console.log(key);
// }

// function checkChildren(obj) {
//   Object.keys(input).forEach((key) => {
//     console.log(key, input[key]);
//   });
// }
// checkChildren(input);

// for (let [keys, values] of Object.entries(input)) {
//   //   console.log(item[1].children);
//   console.log(values);
//   console.log(values.children);

//   for (let [k, v] of Object.entries(values.children)) {
//     console.log(v);

//     if (Object.keys(v).includes(children)) {
//       console.log("Yes it does");
//     }

//     for (let [i, j] of Object.entries(v.children)) {
//       console.log(j);
//     }
//   }
// }
