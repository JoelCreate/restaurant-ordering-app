import { menuArray } from "./data.js"



// menuArray.forEach(function(menuOptions) { 
//     const itemName = document.getElementById('item-name')
//     console.log(menuOptions.name)
// })

function displayMenu() {

    let menuInfo = ``

    menuArray.forEach(function(menuItem) {
        menuInfo += `
        <div class="menu-wrapper">
            <div class="menu-pic" id="menu-pic">${menuItem.emoji}</div>
            <div class="menu-info" id="menu-info">
                <div class="item-name" id="item-name">${menuItem.name}</div>
                <div  class="item-ingredients" id="item-ingredients">${menuItem.ingredients}</div>
                <div class="item-price" id="item-price">$${menuItem.price}</div>
            </div>
            <button class="add-item-btn" id="add-item-btn">+</button>
        </div>
        `
    })
    return menuInfo
}

function renderMenu(){
    document.getElementById('menu-items').innerHTML = displayMenu()
}

renderMenu()

