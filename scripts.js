const showAllButton = document.querySelector('.show-all');

const lista = document.querySelector(".list");

const porcent = document.querySelector(".map-all");


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




function porc(){
    const newPrice = menuOptions.map( item => ({
        ...item,
        price : item.price * 0.9,
    }))

    showAll(newPrice);
}

porcent.addEventListener("click", porc);
showAllButton.addEventListener("click", () => showAll(menuOptions));