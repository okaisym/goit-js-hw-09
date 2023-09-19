const form = document.querySelector('.form');
const btnCreate = document.querySelector('button');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
event.preventDefault();

const delay = parseInt(form.querySelector('input[name="delay"]').value);
const step = parseInt(form.querySelector('input[name="step"]').value);
const amount = parseInt(form.querySelector('input[name="amount"]').value);

for (let i = 1; i <= amount; i += 1) {
  createPromise(i, delay + (i - 1) * step)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}};

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
  if (shouldResolve) {
    resolve ({position, delay});
  } else {
    reject ({position, delay});
  }
}, delay);
});
} 


  


    
