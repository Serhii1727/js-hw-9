const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]')
}

let currentInrervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startChangeColorBody = () => {
    
    currentInrervalId = setInterval(() => {
        const color = getRandomHexColor();
        refs.body.style.backgroundColor = color;
    }, 1000)

    if (refs.btnStop.disabled) {
        refs.btnStop.disabled = false;
    } 

    refs.btnStart.disabled = true;
}

const stopChangeColorBody = () => {
    clearInterval(currentInrervalId)
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
}

refs.btnStart.addEventListener('click', startChangeColorBody)
refs.btnStop.addEventListener('click', stopChangeColorBody)