function incr(x) {
    let list = [];
    for (let i = x; i < x + 10; i++) {
      list.push(i + 1);
    }
    return list;
  }
  console.log(incr(5));