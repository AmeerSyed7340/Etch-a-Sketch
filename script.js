const container = document.createElement('div');
container.classList.add('container');
container.style.height = '500px';
container.style.width = '500px';
const containerHeight = parseFloat(container.style.height);
const containerWidth = parseFloat(container.style.width);

console.log(containerHeight);
//insert into webpage here
document.body.append(container);

let cells = prompt(`Number of rows and columns: `);

const numberOfCells = cells * cells;
for(i = 0; i < numberOfCells; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.height = `${containerHeight/cells}px`;
    grid.style.width = `${containerHeight/cells}px`;
    container.appendChild(grid);
}

const allGrid = document.querySelectorAll('.grid');
let isDragging = false;
allGrid.forEach(grid => {    
    grid.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
    });
    grid.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if(isDragging){
            e.target.classList.add('colorGrid');  
        }                
    })
    grid.addEventListener('mouseup', (e) => {
        e.preventDefault();
        isDragging = false;
    })
})
document.addEventListener('mouseup', (e) => {
        isDragging = false;
    })