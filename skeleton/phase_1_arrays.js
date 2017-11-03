Array.prototype.uniq = function uniq() {

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }

  }

  return result;
};


Array.prototype.twoSum = function twoSum() {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    let curr = this[i];
    for (let j = i + 1; j < this.length; j++) {
      let next = this[j];
      if (curr + next === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

// console.log([2,-2,1,1,3,-3].twoSum());

Array.prototype.transpose = function transpose() {
  const result = [];

  for (let i = 0; i < this[0].length; i++) {
    result.push([]);
  }

  for (let i = 0; i < this.length; i++) {
    let row = this[i];
    for (let j = 0; j < row.length; j++) {
      let element = row[j];
      result[j][i] = element;
    }
  }

  return result;
};

// console.log([[0, 1, 2], [3, 4, 5]].transpose());
