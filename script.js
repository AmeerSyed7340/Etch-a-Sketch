const container = document.createElement('div');
container.classList.add('container');
container.style.height = '500px';
container.style.width = '500px';
const containerHeight = parseFloat(container.style.height);
const containerWidth = parseFloat(container.style.width);

//insert into webpage
document.body.append(container);

//Global variable - default size
let cells = 16; 

function chooseSize(){
    const size = document.querySelector('#btnSize');
    size.addEventListener('click', (e) =>{
        cells = prompt("Enter # of rows and columns:");
        if(cells === null){
            return;
        }
        else{
            cells  = parseInt(cells);
            if(cells < 1 || cells > 100){
                alert(`Size must be between 1 and 100`);
                return;
            }
            else{
                modifyCells();
            } 
        }
    });
}

function modifyCells(){
    const allGrid = document.querySelectorAll('.grid');
    allGrid.forEach(grid => {
        grid.remove();
    });
    generateCells();
    sketch();
}

function generateCells(){
    const numberOfCells = cells * cells;
    for(i = 0; i < numberOfCells; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${containerHeight/cells}px`;
        grid.style.width = `${containerHeight/cells}px`;
        container.appendChild(grid);
    }
}

function sketch(){
    const allGrid = document.querySelectorAll('.grid');
    let isDragging = false;
    allGrid.forEach(grid => {    
        grid.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            e.target.classList.add('colorGrid');  
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
}

function removeSketch(){
    const allGrid = document.querySelectorAll('.grid');
    let isDragging = false;
    allGrid.forEach(grid => {    
        grid.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            e.target.classList.remove('colorGrid');
        });
        grid.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(isDragging){
                e.target.classList.remove('colorGrid');  
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
}

function erase(){
    const erase = document.querySelector('#btnErase');
    erase.addEventListener('click', (e) =>{
        removeSketch();
    });
}

function paint(){
    const paint = document.querySelector('#btnPaint');
    paint.addEventListener('click', (e) =>{
        sketch();
    });
}

function reset(){
    const allGrid = document.querySelectorAll('.grid');
    allGrid.forEach(grid => {
        grid.classList.remove('colorGrid');
    });
}

function resetBtn(){
    const resetButton = document.querySelector('#btnReset');
    resetButton.addEventListener('click', (e)=>{
        reset();
    })
}
//function calls
//Allowed to generate cells and sketch initially
generateCells();
sketch();

chooseSize();
paint();
erase();
resetBtn();

