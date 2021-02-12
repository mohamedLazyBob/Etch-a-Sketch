const gridContainerLength = 800;
let cellsNumber = 3; // max of this is 64, more then it, it's not beatifull 
let cellLength = gridContainerLength / cellsNumber;
let cellCollor = 'rgb(107,85,164)';

grid.addEventListener('mouseover', e => {
	if (e.target.className === 'cell') {
		e.target.style.background = 'rgba(0, 0, 0, 0)';
		// e.target.style.border = 'rgba(0, 0, 0, 0)';
	}
});

function drawGrid() {
	grid.innerHTML = "";
	cellLength = gridContainerLength / cellsNumber;
	for (let i = 0; i < (cellsNumber ** 2); i++) {
		let cell = document.createElement('div');
		cell.style.cssText = `width: ${cellLength}px;
							height: ${cellLength}px`;
		cell.classList.add("cell");
		grid.appendChild(cell);
	}
}

drawGrid();

let rangeObject = document.querySelector('input[type=range]');
rangeObject.value = cellsNumber;

rangeObject.addEventListener('change', () => {
	cellsNumber = rangeObject.value;
	drawGrid();
});

function colorCells() {
	for (let i = 0; i < grid.children.length; i++) {
		grid.children.item(i).style.background = cellCollor;
	}
}

clrBtn.addEventListener('click', colorCells);

let btns = document.querySelectorAll('input[type=checkbox]')
console.log(btns);

// btns.item(1).checked = true
let themeColors = { 'background-1': 'rgb(167,139,193)', 
					'background-2': 'rgb(217,176,103)',
					'background-3': 'rgb(146,186,205)',
					'background-4': 'rgb(246,207,176)',
					'background-5': 'rgb(253,238,199)',
					'background-6': 'rgb(193,194,196)'};

let cellsColors = { 'background-1': 'rgb(107,85,164)', 
					'background-2': 'rgb(224,225,226)',
					'background-3': 'rgb(251,195,163)',
					'background-4': 'rgb(102,83,76)',
					'background-5': 'rgb(255,64,77)',
					'background-6': 'rgb(251,202,179)'};

function uncheckThumbnails(id) {
	for (let idx = 0; idx < btns.length; idx++) {
		let thumbnail = btns.item(idx);
		if (thumbnail.id != id)
			thumbnail.checked = false;
	}
};

btns.forEach(element => {
	element.addEventListener('click', e => {
		let path = ''
		if (e.target.id === 'background-4')
			path = `./imgs/${e.target.id}.jpg`;
		else
			path = `./imgs/${e.target.id}.png`;
		grid.style.backgroundImage = `url(${path})`;
		// change the theme.
		document.getElementsByTagName('body')[0].style.backgroundColor = themeColors[e.target.id] ;
		cellCollor = cellsColors[e.target.id];
		let root = document.documentElement;
		root.style.setProperty('--cells-color', cellCollor);
		colorCells();
		// console.log(path);
		uncheckThumbnails(e.target.id);
	});
});