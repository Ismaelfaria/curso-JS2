const showAllButton = document.querySelector('.show-all');
const mapButton = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-all');
const filter = document.querySelector('.filter-vegan');

const lista = document.querySelector('.list');



function showAll(items){
    let newli = '';

    items.forEach( item => {
        newli = newli + `
        <li>
           <img src="${item.src}">
           <p>${item.name}</p>
           <p class="price">${item.price}</p>
        </li>
        `
    })
 lista.innerHTML = newli;
}




function mapAll(){
    const newPrice = menuOptions.map( item => ({
        ...item,
        price : item.price * 0.9,
    }))

    showAll(newPrice);
}

function sumAllItems(){
    const totalValue = menuOptions.reduce (( acc, cur) => {
        return acc + cur.price}, 0)

        lista.innerHTML = `
        <li>A soma de todos os items do menu:
           <p class="price">${totalValue}</p>
        </li>`

}

function filterJustVegan(){
    const justVegan = menuOptions.filter(item => item.vegan)
    showAll(justVegan);
}

mapButton.addEventListener("click", mapAll);
showAllButton.addEventListener("click", () => showAll(menuOptions));
sumAll.addEventListener("click", sumAllItems);
filter.addEventListener("click", filterJustVegan)