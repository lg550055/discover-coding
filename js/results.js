'use strict';

const n = localStorage.getItem('myName');

function guest() {
  document.getElementById('name').textContent = `Good guesses, ${n}!`;
}

const guesses = [];
guesses.push(localStorage.getItem('nurse'));
guesses.push(localStorage.getItem('web'));
guesses.push(localStorage.getItem('stat'));
guesses.push(localStorage.getItem('eng'));
guesses.push(localStorage.getItem('health'));

function render() {
  const r = document.getElementById('chart').getContext('2d');
  let rData = {
    type: 'bar',
    data: {
      labels: ['nurse','web dev','statistician','software eng','health admin'],
      datasets: [
        {label:'Guess', borderColor:'lightseagreen', backgroundColor:'lightseagreen', borderWidth:1, data: guesses},
        {label:'Actual', borderColor:'aquamarine', backgroundColor:'aquamarine', borderWidth:1, data: [36,24,48,48,72]},
        {label:'Bootcamp', borderColor:'azure', backgroundColor:'azure', borderWidth:1, data: [null,3,null,6,null]}
      ] 
    },
    options: {
      plugins: {
        title: {display:true, text:'Months to complete training', font:{size:20} },
      }
    }
  };
  Chart.defaults.font.size = 16;
  Chart.defaults.color = 'azure';
  new Chart(r, rData);  
}
