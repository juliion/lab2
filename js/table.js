
function fillTable(n) {
    const table = document.getElementById('table');

    let count = 1;
    for (let i = 0; i < n; i++) { 
        let row = document.createElement('tr');
        row.id = `row-${count}`;
        for(let j = 0; j < n; j++) {
            let cell = document.createElement('td');
            cell.id = count;
            let text = document.createTextNode(count);
            cell.appendChild(text);
            row.appendChild(cell);
            count++;
        }
        table.appendChild(row);
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() *(max - min)) + min;
}

function getRandomColor() {
    return 'rgb(' + getRandomNum(0, 255) + ', ' + getRandomNum(0, 255) + ', ' + getRandomNum(0, 255) + ')';
}

function changeColorMainDiagonal(tableRows) {
    let i = 0;
    for (const row of tableRows) {
        const cells = row.cells;
        const cell = cells[i];
        cell.style.backgroundColor = document.getElementById('color-picker').value;
        i++;
    }
}

function addMouseOverListener() {
    const cell = document.getElementById('3');
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
    })
}

function addClickListener() {
    const cell = document.getElementById('3');
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = document.getElementById('color-picker').value;
    })
}

function addDbClickListener() {
    const cell = document.getElementById('3');
    const rows = document.querySelectorAll('#table tr');
    cell.addEventListener('dblclick', () => {
        changeColorMainDiagonal(rows);
    })
}