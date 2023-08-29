const input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      {
        id: 3,
        name: "Mark",
        children: [
          { id: 4, name: "Harry" },
          { id: 10, name: "jutta" },
        ],
      },
    ],
  },

  5: {
    id: 5,
    name: "Mike",
    children: [
      { id: 6, name: "Peter" },
      { id: 7, name: "sudip" },
    ],
  },
};

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

outputObj = {};
finalObj = {};
for (let i in input) {
  const finalObjLength = Object.keys(finalObj).length;
  finalObj[finalObjLength] = { ...input[i], children: [] };

  for (let index in finalObj) {
    for (let i = 0; i < 2; i++) {
      finalObj[index]["children"].push(i);
    }
  }

  console.log(finalObj);

  outputObj = {
    ...outputObj,
    id: input[i]?.id,
    name: input[i]?.name,
  };
  console.log(outputObj);

  if (input[i]?.children?.length) {
    hasChildren(input[i]?.children);
  }
}

function hasChildren(child) {
  child.forEach((el) => {
    outputObj = {
      ...outputObj,
      id: el?.id,
      name: el?.name,
    };
    console.log(outputObj);

    if (el?.children?.length) {
      hasChildren(el?.children);
    }
  });
}
