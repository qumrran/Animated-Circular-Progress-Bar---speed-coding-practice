const rating = document.getElementsByClassName('app__rating')[0];
const blockContainer = document.getElementsByClassName('app__rating__block')[0];

for (let i = 1; i <= 100; i++) {
	const block = document.createElement('div');
	block.className = 'block';
	block.style.transform = 'rotate(' + 3.6 * i + 'deg)';
	block.style.animationDelay = `${i / 40}s`;
	rating.appendChild(block);
}

const counter = document.querySelector('.app__rating__counter');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter = () => {
	const value = +counter.innerText;
	if (value < target) {
		counter.innerText = Math.ceil(value + 1);
		setTimeout(() => {
			NumberCounter();
		}, 25);
	}
};

NumberCounter();
