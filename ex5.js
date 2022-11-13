function tri(list) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[i] > list[j]) {
          let stock = list[i];
          list[i] = list[j];
          list[j] = stock;
        }
      }
    }
    return list;
  }
  
  console.log(tri([5, 100, 2, 7, 66, 4]));