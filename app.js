'use strict';

function qam(a,b,c,d) {
  var answer1 = prompt(a);
  if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
    alert(b);
  } else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    alert(c);
  } else {
    alert(d);
  }

}
qam('Do you like music?','I also like music','Mmmmmmm you are not the party type I see....','That has nothing to do with what I asked you daaaa!!!!');

qam('Do you like animals?','I am glad you like animals, I like them too!!!!','Wow!!!! do not talk to me anymore animal hater!!!','That has nothing to do with what I asked you daaaa!!!!');

qam('Do you like sports?','Awesssome sports are always entrataining!!!','Lazy!!!! Get up and do some sports','That has nothing to do with what I asked you daaaa!!!!');

qam('Do you like working?','Good, work is always good for the spirit','You should try enjoing it.','That has nothing to do with what I asked you daaaa!!!!');

qam('So did you like my questions?','I like them too, very informative','Well too bad, not gonna change them.','That has nothing to do with what I asked you daaaa!!!!');

alert('Couple more questions.......');

var question6 = ('Guess a number from 0 to 9, you have 5 chances to guess it');
var number6 = Math.floor(Math.random() * 10);
var i;

for (i = 0; i < 5; i++) {
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

var question7 = ('What is the name of my oldest son? 3 chances to guess');
var number7 = ['Fortunato', 'Marcela'];
var ii;

for (ii = 0; ii < 3; ii++) {
  var answer7 = prompt(question7);
  if (answer7 === number7[0]) {
    alert('You win!!!');
    var wonwon = 1;
    break;
  }
  else {
    alert('Wrong!!!');
  }
}

alert('last question......');

var question8 = ('What is the name of my daughter? 3 chances to guess');
var iii;

for (iii = 0; iii < 3; iii++) {
  var answer8 = prompt(question8);
  if (answer8 === number7[1]) {
    alert('You win!!!');
    var wonwonwon = 1;
    break;
  }
  else {
    alert('Wrong!!!');
  }
}

console.log('So did you like my questions?');
console.log(answer5);

alert('Couple more questions.......');

var question6 = ('Guess a number from 0 to 9, you have 4 chances to guess it');
var number6 = Math.floor(Math.random() * 10);
var i;
for (i = 0; i < 4; i++) {
  var answer6 = parseInt(prompt(question6));
  if (number6 > answer6) {
    alert('Too low!!!!');
    var won = 0;
  }
  else if (number6 < answer6) {
    alert('too high!!!');
  }
  if (number6 === answer6) {
    alert('You Won!!!!!');
    var won = 1;
  }
  else {
    ( alert('You lost!!! the number was ' + number6)
  }
   else ( alert('You lost!!! the number was ' + number6);
}

var question7 = ('What is the name of my oldest son? 3 chances to guess');
var number7 = ['Fortunato', 'Marcela'];
var ii;

for (ii = 0; ii < 3; ii++) {
  var answer7 = prompt(question7);
  if (answer7 === number7[0]) {
    alert('You win!!!');
    var wonwon = 1;
    break;
  }
  else {
    alert('Wrong!!!');
  }
}

alert('last question......');

var question8 = ('What is the name of my daughter? 3 chances to guess');
var iii;

for (iii = 0; iii < 3; iii++) {
  var answer8 = prompt(question8);
  if (answer8 === number7[1]) {
    alert('You win!!!');
    var wonwonwon = 1;
    break;
  }
  else {
    alert('Wrong!!!');
  }
}

if ((wonwon === 1) && (wonwonwon === 1)) {
  alert('You got both names right!!!!');
}
else {
  alert('You did not get both names right!!!');
}
