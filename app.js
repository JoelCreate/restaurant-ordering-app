import { menuArray } from "./data.js"



// menuArray.forEach(function(menuOptions) { 
//     const itemName = document.getElementById('item-name')
//     console.log(menuOptions.name)
// })

function displayMenu() {

    let menuInfo = ``

    menuArray.forEach(function(menuItem) {
        menuInfo += `
        <div id="menu-pic">${menuItem.emoji}</div>
        <div id="menu-info">
            <div id="item-name">${menuItem.name}</div>
            <div id="item-ingredients">${menuItem.ingredients}</div>
            <div id="item-price">${menuItem.price}</div>
        </div>
        `
    })
    return menuInfo
}

function renderMenu(){
    document.getElementById('menu-items').innerHTML = displayMenu()
}

renderMenu()

