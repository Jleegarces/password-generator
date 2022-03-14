let passwords = [
  'dJmeoWmixx22',
  'woahthere27!',
  'thatsnotmydog77',
  'pEoPleAreStrange',
  'MoNeY!!!',
  'ThEdOoRs!!'
];

let passwordOne = document.getElementById('pw-el1');
let passwordTwo = document.getElementById('pw-el2');
let passwordThree = document.getElementById('pw-el3');
let passwordFour = document.getElementById('pw-el4');

function randomPw () {
  let click = Math.floor(Math.random() * 3) ;
  if (click === 1 ) {
    passwordOne.textContent = passwords[0];
    passwordTwo.textContent = passwords[5];
    passwordThree.textContent = passwords[2];
    passwordFour.textContent = passwords[4];

  } else if (click === 2) {
    passwordOne.textContent = passwords[1];
    passwordTwo.textContent = passwords[4];
    passwordThree.textContent = passwords[2];
    passwordFour.textContent = passwords[3];
  } else {
    passwordOne.textContent = passwords[0];
    passwordTwo.textContent = passwords[1];
    passwordThree.textContent = passwords[5];
    passwordFour.textContent = passwords[3];
  }
};