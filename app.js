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

// function orderDetails() {

//     let addItemBtn = document.querySelectorAll('#add-item-btn')
//     let orderInfo = ``

//     addItemBtn.forEach((btn) => {
//         btn.addEventListener("click", function(addItem){
//             console.log(addItem.target.id)
//             document.getElementById('order-section').classList.toggle('hidden')
//             orderInfo += `
//             <div class="order-details">Your Order</div>
                
//                 <div class="order-wrapper">
//                     <div class="order-item">${addItem.name}/div>
//                     <button class="remove" id="remove">remove</button>
//                     <div class="item price">${addItem.price}</div>
//                 <hr>
//                     <div clas="order-total" id="order-total"></div>
//                 </div>

//                 <button id="complete-order">Complete Order</button>
//             `

//         })
//     })  
//     return orderInfo

// }

// //displayOrderDetails()

// function renderOrderDetails(){
//     document.getElementById('order-section').innerHTML = orderDetails()
// }

// renderOrderDetails()




function displayOrder() {

    let addItemBtn = document.querySelectorAll('#add-item-btn')
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
        <div clas="order-total" id="order-total"></div>
        <button id="complete-order">Complete Order</button>
        `
        })
        return orderInfo
    }



function renderOrderDetails(){

    let addItemBtn = document.querySelectorAll('#add-item-btn')

    addItemBtn.forEach((btn) => {
        btn.addEventListener("click", function(e){
           document.getElementById('order-section').innerHTML = displayOrder()
        })
    })
}
    
renderOrderDetails()
    