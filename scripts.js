const showAllBnt = document.querySelector('.show-all');
const mapAllBnt = document.querySelector('.map-all');
const sumAllBnt = document.querySelector('.sum-all');
const filterVeganBnt = document.querySelector('.filter-vegan');

const listaCompleta = document.querySelector('.list');

function showAll(item){
    let newList = '';
    item.forEach(element => {
        newList = newList +
        `<li>
          <img src="${element.src}">
          <p>${element.name}</p>
          <p>${element.price}</p>
        </li>`
    });
    listaCompleta.innerHTML = newList;
}

function mapAll(){
    const prom = menuOptions.map( item => ({
        ...item,
        price : item.price * 0.9,
    }))
    showAll(prom);
}

function sumAll(){
    const sum = menuOptions.reduce( (acc, acu) => {
        return acc + acu.price
    },0)

    listaCompleta.innerHTML = 
    `<li>O valor total: <p>${sum}</p></li>`
}

function filterVegan(){
    const veg = menuOptions.filter(item => item.vegan);
    showAll(veg)
}

showAllBnt.addEventListener("click", () => showAll(menuOptions));
mapAllBnt.addEventListener("click", mapAll);
sumAllBnt.addEventListener("click", sumAll);
filterVeganBnt.addEventListener("click", filterVegan );