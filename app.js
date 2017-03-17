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

alert('Now we are going to play a guessing game... ');
var username = prompt('By the way what is your name?');
var x = 6;
var question6 = ('Guess a number from 0 to 9, Opportunities left: ');
var number6 = Math.floor(Math.random() * 10);
var i;
for (i = 0; i < 4 ; i++) {
  var answer6 = parseInt(prompt(question6 + x));
  if (number6 === answer6) {
    alert('You won!!!!');
    var won = 1;
    break;
  }
  else if (number6 < answer6){
    alert('Too high!!!');
    var x = x - 1;
  }
  else if (number6 > answer6) {
    alert('Too low!!!');
    var x = x - 1;
  }
}
if (won !== 1) {
  alert('You lost!!! the number was ' + number6);
}

var t = 6;
var question7 = ('In what states have I lived? Opportunities left: ');
var number7 = ['Texas', 'Oklahoma', 'California', 'Florida', 'Washington'];
var ii;
var C = 0;

for (ii = 0; ii < 6; ii++) {
  var answer7 = prompt(question7 + t);
  if (answer7 === number7[0]) {
    var C = C + 1;
    var t = t - 1;
    alert('You got that one right!!! ' + C + ' correct so far ' + username);
  }
  if (answer7 === number7[1]) {
    var C = C + 1;
    var t = t - 1;
    alert('You got that one right!!! ' + C + ' correct so far ' + username);
  }
  if (answer7 === number7[2]) {
    var C = C + 1;
    var t = t - 1;
    alert('You got that one right!!! ' + C + ' correct so far ' + username);
  }
  if (answer7 === number7[3]) {
    var C = C + 1;
    var t = t - 1;
    alert('You got that one right!!! ' + C + ' correct so far ' + username);
  }
  if (answer7 === number7[4]) {
    var C = C + 1;
    var t = t - 1;
    alert('You got that one right!!! ' + C + ' correct so far ' + username);
  }
  if ((answer7 !== number7[0]) && (answer7 !== number7[1]) && (answer7 !== number7[2]) && (answer7 !== number7[3]) && (answer7 !== number7[4])) {
    alert('Wrong!!!!');
    var t = t - 1;
  }
}
alert(username + ', you had ' + C + ' correct answers!!! The correct answers were ' + number7);
