const shuffleQuestions = arr => {
  let n = arr.length;
  let tempArr = [];
  for (let i = 0; i < n - 1; i++) {
    tempArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
  }
  tempArr.push(arr[0]);
  return tempArr;
};

export default shuffleQuestions;
