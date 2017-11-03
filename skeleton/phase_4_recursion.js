function range(start, end) {
  let base = [];
  base.push(start);
  if (start === end) {
    return base;
  }
  base = base.concat(range(start + 1, end));
  return base;
}


// console.log(range(1,5));


function sumRec(arr) {
  let sum = arr[0];
  if (arr.length === 1) {
    return sum;
  }
  sum = sum + sumRec(arr.slice(1, arr.length));
  return sum;
}

// console.log(sumRec([1,2,3,4,5]));

function exponent(base, power) {
  if (power === 0) {
    return 1;
  }
  if (power === 1) {
    return base;
  }
  let result = base * exponent(base, power - 1);
  return result;
}
// console.log(exponent(3,8));

function exponent2(base, power) {
  if (power === 0) {
    return 1;
  }
  if (power === 1) {
    return base;
  }
  if (power % 2 === 0) {
    let result = Math.pow(exponent2(base, power / 2), 2);
    return result;
  } else {
    let result = base * Math.pow(exponent2(base, (power - 1) / 2), 2);
    return result;
  }
}
// console.log(exponent2(3, 3));

function fibonacci(n) {
  if (n === 2) {
    return [1, 2];
  } else if (n === 1) {
    return [1];
  }

  // let base = [1, 2];
  // let result = base.push(base[base.legnth -1] + fibonacci(n - 1));
  // return result;

  let sequence = fibonacci(n-1);
  // console.log(sequence);
  let last_digit = sequence.length - 1;
  let second_to_last = sequence.length - 2;
  let new_digit = sequence[last_digit] + sequence[second_to_last];
  // console.log(new_digit);
  let result = sequence.push(new_digit);
  // console.log(`result: ${result}`);
  return result;
}


// console.log(fibonacci(10));

function bsearch(arr, target) {
  if (arr.length === 1) {
    return -1;
  }
  // console.log(arr);
  let middleIdx = Math.floor(arr.length / 2);
  // console.log(middleIdx);
  let middleEl = arr[middleIdx];
  // console.log(middleIdx);
  // console.log(middleEl);
  // console.log(target);
  // console.log(middleEl === target);
  if (middleEl === target) {
    // console.log("yoooo");
    // console.log(middleIdx);
    return middleIdx;
  } else if (middleEl < target) {
    let result = bsearch(arr.slice(middleIdx + 1, arr.length), target);
    if (result === -1) {
      return -1;
    } else {
      return result + middleIdx + 1;
    }
  } else {
    let result = bsearch(arr.slice(0, middleIdx), target);
  }
}

// console.log(bsearch([1,2,3,4,5,6,7], 6));








////


//
