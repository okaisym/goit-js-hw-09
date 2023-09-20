const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer = null;

btnStop.setAttribute("disabled", false);

btnStart.addEventListener('click', () => {
     timer = setInterval(() => {
        btnStart.disabled = true;
        btnStop.disabled = false;
          body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
         }, 1000);
});

btnStop.addEventListener('click', () => {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timer);
});

