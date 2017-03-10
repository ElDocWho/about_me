"use strict";

var answer1 = prompt('Do you like music?');
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
  alert('I also like music');
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
 alert('Mmmmmmm you are not the party type I see....');
} else {
  alert('That has nothing to do with what I asked you daaaa!!!!');
}

console.log('Do you like music?');
console.log(answer1);


var answer2 = prompt('Do you like animals?');
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  alert('I am glad you like animals, I like them too!!!!');
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  alert('Wow!!!! do not talk to me anymore animal hater!!!');
} else {
  alert('That has nothing to do with what I asked you daaaa!!!!');
}

console.log('Do you like animals?');
console.log(answer2);

var answer3 = prompt('Do you like sports?');
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  alert('Awesssome sports are always entrataining!!!');
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  alert('Lazy!!!! Get up and do some sports');
} else {
  alert('That has nothing to do with what I asked you daaaa!!!!');
}

console.log('Do you like sports?');
console.log(answer3);

var answer4 = prompt('Do you like working?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  alert('Good, work is always good for the spirit');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  alert('You should try enjoing it.');
} else {
  alert('That has nothing to do with what I asked you daaaa!!!!');
}

console.log('Do you like working?');
console.log(answer1);

var answer4 = prompt('So did you like my questions?');
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  alert('Good, very good');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  alert('Too bad.');
} else {
  alert('That has nothing to do with what I asked you daaaa!!!!');
}

console.log('So did you like my questions?');
console.log(answer2);

alert('Couple questions more');

var question6 = ('Guess a number from 0 to 9, you have 5 opportunities');
var number6 = Math.floor(Math.random() * 10);
var i;
for (i=0; i<5; i++) {
var answer6 = parseInt(prompt(question6));
if (number6 === answer6) {
alert('You won!!!!');
var won = 1;
break;
}
else {
alert('Try again!!!');
}
}
if (won === 1 ) {
alert('Good job!!!');
}
else {
alert('You lost!!! the number was ' + number6);
}
