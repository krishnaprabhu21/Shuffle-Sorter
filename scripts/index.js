let appContainer = document.getElementById("sort_and_shuffle_container");
let cellsArr = Array.prototype.slice.call(appContainer.getElementsByClassName('cells'));

const commonCellOperation = (actionIdentifier) => {
    cellsArr.forEach((element) => appContainer.removeChild(element));
    actionIdentifier === "shuffle" ? shuffleCells(cellsArr) : sortCells(cellsArr);
}

const shuffleCells = (cellsArr) => {
    for (let i = cellsArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cellsArr[i];
        cellsArr[i] = cellsArr[j];
        cellsArr[j] = temp;
    }
    return cellsArr;
}

const shuffleHandler = () => {
    commonCellOperation("shuffle");
    cellsArr.forEach((element) => {
        element.setAttribute('data-item', element.innerHTML)
        appContainer.appendChild(element)
    })
}

const sortCells = (cellsArr) => {
    cellsArr.sort((a, b) => {
        let cellA = Number(a.innerHTML);
        let cellB = Number(b.innerHTML);
        return (cellA > cellB) ? 1 : -1;
    });
}

const sortHandler = () => {
    commonCellOperation("sort");
    cellsArr.forEach((element) => appContainer.appendChild(element))
}


