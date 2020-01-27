const binGap = n => {
  const bin = n.toString(2);

  //make sure there is at least two ones and 1 zero
  if (bin.indexOf("0") === -1) return 0;
  let ones = 0;

  //find max
  let max = 0;
  // keep track of current gap
  let count = 0;

  bin.split("").forEach(num => {
    if (num === "1") {
      // found a one
      ones++;

      if (count) {
        //if 1 was already found
        //this one ends the bin sequence
        if (count > max) max = count;
        // restart count
        count = 0;
      }
    } else {
      count++;
    }
  });
  return ones >= 2 ? max : 0;
};
