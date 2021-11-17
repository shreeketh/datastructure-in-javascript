function findLongest(arr) {
  const mapWithKeys = {};
  let maxVal = "";
  let maxCount = 0;
  arr.forEach((el) => {
    if (el.length >= 1) {
      const substr = el.split("");
      substr.pop();
      const key = substr.join("");
      if (mapWithKeys[key]) {
        mapWithKeys[el] = mapWithKeys[key] + 1;
        delete mapWithKeys[key];
        if (mapWithKeys[el] > maxCount) {
          maxVal = el;
          maxCount = mapWithKeys[el];
        }
      } else {
        mapWithKeys[el] = 1;
      }
    }
  });
  console.log(maxVal, maxCount);
}
