import { menuArray } from "./data.js"




function renderMenu(){
    document.getElementById('menu-items').innerHTML = displayMenu()
}

renderMenu()


// Loop through data.js and display menu item in HTML //

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
        <hr>
        `
    })
    return menuInfo
}


// Add menu button //

function displayOrder() {   

    let orderInfo = ``

    menuArray.forEach(function(addItem) {
        orderInfo += `
        <div class="order-details">Your Order</div>                        
        <div class="order-wrapper">
            <div class="order-item">${addItem.name}</div>
            <button class="remove" id="remove">remove</button>
            <div class="item price">${addItem.price}</div>
        </div>
            <hr>
        <div class="order-total" id="order-total"></div>
        <button id="complete-order">Complete Order</button>
        `
        })    
        return orderInfo

    }



function renderOrderDetails(){

    let addItemBtn = document.querySelectorAll('#add-item-btn')

    addItemBtn.forEach((btn) => {
        btn.addEventListener("click", function(e){
            document.querySelector('.order-total').innerHTML = displayOrder()
        })
    })   

}
    
renderOrderDetails()
    