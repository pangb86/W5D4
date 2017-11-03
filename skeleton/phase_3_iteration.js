Array.prototype.bubbleSort = function bubbleSort() {
  let sorted = false;

  while (!sorted) {

    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      let curr = this[i];
      let next = this[i + 1];
      if (curr > next) {
        this[i] = next;
        this[i + 1] = curr;
        sorted = false;
        // i = -1;
      }
    }
  }
  // }
  // for (var i = 0; i < this.length; i++) {
  //   let curr = this[i];
  //   for (var j = i + 1; j < this.length; j++) {
  //     let next = this[j];
  //     if (curr > next) {
  //       this[i] = this[j];
  //       this[j] = curr;
  //     }
  //   }
  // }
};

// let a = [5,3,7,8,1];
// a.bubbleSort();
// console.log(a);
String.prototype.substrings = function substrings() {
  let result = [];

  for (var i = 0; i < this.length; i++) {
    result.push(this[i]);
    let current = this[i];
    for (var j= i + 1; j < this.length; j++) {
      current = current + this[j];
      result.push(current);
    }
  }

  return result;
};

// console.log("string".substrings());
