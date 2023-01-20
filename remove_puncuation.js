// let str =
//   "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ";

let str =
  "I have failed over and over and over again in my life and that is why I succeed.";
wordCountEngine(str);

function wordCountEngine(document) {
  // your code goes here

  let arr = document.trim().split("");

  let punc = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  let puncLess = arr.filter((item) => punc.indexOf(item) === -1);

  let finalArray = puncLess
    .join("")
    .trim()
    .split(" ")
    .map((item) => item.toLowerCase());

  let ob = {};

  for (let key of finalArray) {
    if (key in ob) {
      ob[key] += 1;
    } else {
      ob[key] = 1;
    }
  }
  // console.log(ob)
  let resultArray = [];

  for (let key in ob) {
    resultArray.push([key, ob[key] + ""]);
  }

  resultArray.sort((a, b) => b[1] - a[1]);

  console.log(finalArray);

  console.log(resultArray);
  //   return arr;
}

//Practice = [p, r, a, c,t, i, c, e, !]
