"use strict";

// davaleba #1
let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray = array.map((x) => x / 3);
console.log(newarray);

// davaleba #2
let languages = ["html", "css", "javascript", "python", "php"];
let newLanguages = languages.filter((y) => y.length > 3);
console.log(newLanguages);

// davaleba #3
let words = ["Madrid", "Rome", "Milan", "Berlin"];
let Mwords = words.filter((item) => item.includes("m", "M"));
//  აქ დიდი და პატარა ასოები როგორ  გამოვატანინო?
console.log(Mwords);

// davaleba #4
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let newarr = arr1.concat(arr2, arr3);
console.log(newarr);

// davaleba #5
let arr = [-1, -2, -3, 4].some((z) => z > 0);
console.log(arr);

// davaleba #6
let array1 = [23, 45, 32, 5, 87, 7, 3, 98];
let result = array1.sort((x, y) => y - x)[array1.length - 1];
console.log(result);

// davaleba #7
let newDivelement = document.createElement("div");
newDivelement.classList.add("wraper");
document.getElementById("box").appendChild(newDivelement);

let newimgtag = document.createElement("img");
newimgtag.setAttribute("src", "https://images.app.goo.gl/3RkS8H3chHgWLoWt9");
newimgtag.setAttribute("alt", "image");
newDivelement.appendChild(newimgtag);

let newhtag = document.createElement("h2");
newhtag.textContent = "image title";
newhtag.classList.add("title");
newhtag.style.color = "red";
newhtag.style.fontSize = "30px";
newDivelement.appendChild(newhtag);

// davaleba #8

let ptag = document.createElement("P");
ptag.classList.add("text");
ptag.innerText = "hello";

// document.querySelectorAll(".test")[1].appendChild(ptag);

for (const x of document.querySelectorAll(".test")) {
  x.appendChild(ptag);
}
// ????????????

// davaleba #9
let array2 = [2, 15, 10, 24];
array2.splice(2, 1);
console.log(array2);

// let array2 = [2, 15, 10, 24].forEach((x) => {
//   if (x === 10) {
//   }
// });

// splice-ით ამოვშალე, მაგრამ ძალიან მემარტივება და მგონია სხვანაირად გვინდა რაღაც:?
