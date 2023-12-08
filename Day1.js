/*
You try to ask why they can't just use a weather machine ("not powerful enough") 
and where they're even sending you ("the sky") and why your map looks mostly blank 
("you sure ask a lot of questions") and hang on did you just say the sky 
("of course, where do you think snow comes from") when you realize that the Elves 
are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document 
(your puzzle input) has been amended by a very young Elf who was apparently just excited 
to show off her art skills. Consequently, the Elves are having trouble reading the values 
on the document.

The newly-improved calibration document consists of lines of text; each line originally 
contained a specific calibration value that the Elves now need to recover. On each line, 
the calibration value can be found by combining the first digit and the last digit (in that order) 
to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

In this example, the calibration values of these four lines are 12, 38, 15, and 77. 
Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?
*/
import * as fs from 'fs';

// input: array of strings - no spaces, no special characters, no empty strings
// output: 2 digit number

// make array of .txt file
const makeArr = () => {
  const array = fs.readFileSync('./input.txt', 'utf-8').split('\n');
  array.pop();
  return array;
}

const arr = makeArr();

// get calibrated, 2 digit number
const calibrate = str => {
  let p1 = 0;
  let p2 = str.length - 1;
  while (p2 >= p1) {
    if (!Number(str[p1])) p1++;
    if (!Number(str[p2])) p2--;
    if (Number(str[p1]) && Number(str[p2])) {
      const result = Number(str[p1].toString() + str[p2].toString());
      return result;
    }
  }
}

// get sum of all elements in array
const consume = arr1 => {
  let sum = 0;
  for (let i in arr1) {
    const num = calibrate(arr1[i]);
    sum += num;
  };

  return sum;
}

console.log(consume(arr));