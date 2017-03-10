'use strict';

var question = ('Do you like music?');
var pos = ('I also like music');
var neg = ('Mmmmmmm you are not the party type I see....');
var nnn = ('That has nothing to do with what I asked you daaaa!!!!');

function qam() {
  var answer1 = prompt(question);
  if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
    alert(pos);
  } else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    alert(neg);
  } else {
    alert(nnn);
  }
  console.log(question);
  console.log(answer1);
}
qam();

var question = ('Do you like animals?');
var pos = ('I am glad you like animals, I like them too!!!!');
var neg = ('Wow!!!! do not talk to me anymore animal hater!!!');
var nnn = ('That has nothing to do with what I asked you daaaa!!!!');
qam();

var question = ('Do you like sports?');
var pos = ('Awesssome sports are always entrataining!!!');
var neg = ('Lazy!!!! Get up and do some sports');
var nnn = ('That has nothing to do with what I asked you daaaa!!!!');
qam();

var question = ('Do you like working?');
var pos = ('Good, work is always good for the spirit');
var neg = ('You should try enjoing it.');
var nnn = ('That has nothing to do with what I asked you daaaa!!!!');
qam();

var question = ('So did you like my questions?');
var pos = ('I like them too, very informative');
var neg = ('Well too bad, not gonna change them.');
var nnn = ('That has nothing to do with what I asked you daaaa!!!!');
qam();

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

if ((wonwon === 1) && (wonwonwon === 1)) {
  alert('You got both names right!!!!');
}
else {
  alert('You did not get both names right!!!');
}
