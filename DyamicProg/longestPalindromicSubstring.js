//Completed

// let str = "aaabaabcd";
let str = "abccbc";
// let str = 'thisracecarisgood';
// let str = 'geeksskeeg'

let n = str.length;

if (n < 2) {
  console.log(n);
} else {
  let maxLength = 1;
  let start = 0;
  let low, high;

  for (let i = 0; i < n; i++) {
    low = i - 1;
    high = i + 1;

    while (high < n && str[high] == str[i]) {
      high++;
    }

    while (low >= 0 && str[low] == str[i]) {
      low--;
    }

    while (low >= 0 && high < n && str[low] == str[high]) {
      low--;
      high++;
    }

    let length = high - low - 1;

    maxLength = Math.max(maxLength, length);
    start = low + 1;
  }
  console.log(maxLength);
}
