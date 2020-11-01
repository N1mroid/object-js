"use strict";

let num = 50;

// 1
while (num <= 55) {
  console.log(num);
  num++;
}

// 2
do {
  console.log(num);
  num++;
} while (num < 55);

// 3
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

// 4
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i); // 1, 2, 3, 4, 5;
}

// 5
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i); // 1, 2, 3, 4, 5, 7, 8, 9;
}


