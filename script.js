const gridContainerLength = 800;
const cellsNumber = 20;
let cellLength = gridContainerLength / cellsNumber; 

let grid = document.querySelector('.grid');
for (let i = 0; i < (cellsNumber ** 2); i++) {
	let cell = document.createElement('div');
	cell.style.cssText = `width: ${cellLength}px;
							height: ${cellLength}px`;
	cell.classList.add("cell");
	grid.appendChild(cell);
	// console.log(i);
}

let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
	cell.addEventListener('mouseenter', (e) => {
		if (e.fromElement.className === 'cell') {
			e.fromElement.style.background = 'rgba(0, 0, 0, 0)';
		}
	});
	cell.addEventListener('mouseout', (e) => {
		if (e.fromElement.className === 'cell') {
			e.fromElement.style.background = 'rgba(0, 0, 0, 0)';
		}
	});
});