import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]')
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length)];


const random = {
    timerId: null,
    activeRandom: false,

    start() {
        if (this.activeRandom) return;
        this.activeRandom = true;
        this.timerId = setInterval(randomColor, 1000)
    },
    stop() {
        this.activeRandom = false;
        clearInterval(this.timerId);
    }
}


refs.btnStart.addEventListener('click', random.start.bind(random))
refs.btnStop.addEventListener('click', random.stop.bind(random))