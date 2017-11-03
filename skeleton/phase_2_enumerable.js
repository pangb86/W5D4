Array.prototype.myEach = function myEach(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};


// [1,2,3].myEach(el => console.log(el));
Array.prototype.myMap = function myMap(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

// console.log([1,2,3].myMap(el => el + 1));

Array.prototype.myReduce = function myReduce(cb, initialValue) {
  if (initialValue) {
    let acc = initialValue;
    this.myEach(el => acc = cb(acc, el));


    // for (let i = 0; i < this.length; i++) {
    //   acc = cb(acc, this[i]);
    // }
    return acc;
  } else {
    let acc = this[0];
    this.slice(1, this.length).myEach(el => acc = cb(acc, el));
    // for (let i = 1; i < this.length; i++) {
    //   acc = cb(acc, this[i]);
    // }
    return acc;
  }
};


const variable = [1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25);
console.log(variable);
