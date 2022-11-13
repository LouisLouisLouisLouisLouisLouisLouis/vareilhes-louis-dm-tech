function sum(x) {
    let sum = 0;
    for (let i = 1; i < x + 1; i++) {
      sum = sum + i;
    }
    return sum;
  }
  console.log(sum(5));