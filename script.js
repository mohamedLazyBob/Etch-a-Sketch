const gridContainerLength = 800;
let cellsNumber = 20; // max of this is 64, more then it, it's not beatifull 
let cellLength = gridContainerLength / cellsNumber;

grid.addEventListener('mouseover', e => {
	if (e.target.className === 'cell') {
		e.target.style.background = 'rgba(0, 0, 0, 0)';
		e.target.style.border = 'rgba(0, 0, 0, 0)';
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

clrBtn.addEventListener('click', e => {
	for (let i = 0; i < grid.children.length; i++) {
		grid.children.item(i).style.background = 'rgb(107,85,164)';
	}
});