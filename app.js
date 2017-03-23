'use strict';

var counter = { lin : 0};
var user = { name: null};
var n = 0;
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

function q() {
  var user1 = prompt('By the way what is your name?');
  user.name = user1;
}
q();
function z() {
  var n = counter.lin;
  var n = n + 1;
  counter.lin = n;
};

function quest6(c) {
  var question6 = ('Guess a number from 0 to 9, Opportunities left: ');
  var number6 = Math.floor(Math.random() * 10);
  var i;
  var won = 0;
  var x = 4;
  for (i = 0; i < 4 ; i++) {
    var answer6 = parseInt(prompt(question6 + x));
    var x = x - 1;
    if (number6 === answer6) {
      alert('You won!!!!');
      var won = 1;
      z();
      console.log(counter.lin);
      break;
    }
    else if (number6 < answer6){
      alert('Too high!!!');
    }
    else if (number6 > answer6) {
      alert('Too low!!!');
    }
  }
  if (won !== 1) {
    alert('You lost!!! the number was ' + number6);
  }
}
quest6();
var t = 6;
var number7 = ['Texas', 'Oklahoma', 'California', 'Florida', 'Washington'];
function quest7() {
  var number7 = ['Texas', 'Oklahoma', 'California', 'Florida', 'Washington'];
  var t = 6;
  var question7 = ('What states have I lived at? Opportunities left ');
  var ii = 0;
  for (ii = 0; ii < 6; ii++) {
    var answer7 = prompt(question7 + t);
    if (answer7 === number7[0]) {
      z();
      var t = t - 1;
      alert('You got that one right!!! ');
    }
    if (answer7 === number7[1]) {
      z();
      var t = t - 1;
      alert('You got that one right!!! ');
    }
    if (answer7 === number7[2]) {
      z();
      var t = t - 1;
      alert('You got that one right!!! ');
    }
    if (answer7 === number7[3]) {
      z();
      var t = t - 1;
      alert('You got that one right!!! ');
    }
    if (answer7 === number7[4]) {
      z();
      var t = t - 1;
      alert('You got that one right!!! ');
    }
    if ((answer7 !== number7[0]) && (answer7 !== number7[1]) && (answer7 !== number7[2]) && (answer7 !== number7[3]) && (answer7 !== number7[4])) {
      alert('Wrong!!!!');
      var t = t - 1;
    }
  }
}
quest7();
alert (user.name + ', you had ' + counter.lin + ' correct answers!!! The correct answers were: ' + number7);
