'use strict';

const n = prompt('What is your name?');
localStorage.setItem('myName', n);

window.onbeforeunload = () => window.scrollTo(0, 0);

function welcome() {
  document.getElementById('name').textContent = `Welcome, ${n}!`;
}

function reveal(event) {
  event.target.style.color = 'azure';
}

