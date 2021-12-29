'use strict';

const n = localStorage.getItem('myName');

function guess() {
  document.getElementById('name').textContent = `Ok, ${n}!`;
}

function results() {
  document.getElementById('name').textContent = `Good guesses, ${n}!`;
}

setTimeout(()=>{
  const myform = document.getElementById('guess');
  if (myform) {
    function handleSubmit(event) {
      event.preventDefault();
      localStorage.setItem('nurse', event.target.nurse.value);
      localStorage.setItem('web', event.target.web.value);
      localStorage.setItem('stat', event.target.stat.value);
      localStorage.setItem('eng', event.target.eng.value);
      localStorage.setItem('health', event.target.health.value);
      location.href = 'results.html';
    }
    myform.addEventListener('submit', handleSubmit);  
  }  
},1000);

const guesses = [];
guesses.push(JSON.parse(localStorage.getItem('nurse')));
guesses.push(JSON.parse(localStorage.getItem('web')));
guesses.push(JSON.parse(localStorage.getItem('stat')));
guesses.push(JSON.parse(localStorage.getItem('eng')));
guesses.push(JSON.parse(localStorage.getItem('health')));

const r = document.getElementById('chart').getContext('2d');
let rData = {
  type: 'bar',
  data: {
    labels: ['nurse','web dev','statistician','software eng','health admin'],
    datasets: [
      {label:'Guess', borderColor:'lightseagreen', backgroundColor:'lightseagreen', borderWidth:1, data: allProducts.map(x => x.votes)},
      {label:'Actual', borderColor:'aquamarine', backgroundColor:'aquamarine', borderWidth:1, data: [36,24,48,48,72]},
      {label:'Bootcamp', borderColor:'grey', backgroundColor:'grey', borderWidth:1, data: [null,3,null,6,null]}
    ]  
  },
  options: {plugins: {title: {display:true, text:'Months it take to become:', font:{size:20}, color:'grey' }}}
};
new Chart(r, rData);
