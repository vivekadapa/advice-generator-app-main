const url = 'https://api.adviceslip.com/advice';

const button = document.querySelector('#genbtn');
const adviceno = document.querySelector('#adviceno');
const advice = document.querySelector('#advice');

fetch(url)
.then(res => res.json())
.then(data => {
    adviceno.innerHTML = `ADVICE #${data.slip.id}`;
    advice.innerHTML = `"${data.slip.advice}"`;
})

function generateAdvice(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        adviceno.innerHTML = `ADVICE #${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
    })
}


