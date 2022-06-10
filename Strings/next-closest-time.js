/**
 * https://leetcode.com/problems/next-closest-time/
 * Failing for "20:48"
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function (time) {
  var arr = time.split(":");
  var hour = +arr[0];
  var minutes = +arr[1];

  var totalMinutes = hour * 60 + minutes;
  var set = new Set([]);
  var ans = "";

  time.split("").forEach((digit) => {
    if (!isNaN(digit)) {
      set.add(digit);
    }
  });

  function checkIsValid(str) {
    var valid = true;
    str.split("").forEach((x) => {
      if (!set.has(x)) {
        valid = false;
      }
    });
    return valid;
  }

  while (true) {
    console.log(totalMinutes);
    totalMinutes++;
    var hr = Math.floor(totalMinutes / 60) % 24;
    if (`${hr}`.length == 1) {
      hr = `0${hr}`;
    }
    var min = totalMinutes % 60;

    if (`${min}`.length == 1) {
      hr = `0${min}`;
    }

    var str = `${hr}${min}`;

    if (checkIsValid(str)) {
      ans = `${hr}:${min}`;
      break;
    }
  }

  return ans;
};
