const runner = document.querySelector('.you');
let position = 0;

const raceFunction = (e) => {
    if (e.keyCode === 32) {
        console.log('działa');
        runner.style.left = `${position}%`;
        position++;
    }

}

window.addEventListener('keyup', raceFunction);