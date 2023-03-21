import { menuArray } from "./data.js"



// Loop through data.js and display menu item in HTML //

function displayMenu() {

    let menuInfo = ``

    let addItemBtn = document.querySelector(`[data-add-item-id="${menuItem.id}"]`)
        addItemBtn.addEventListener("click", displayOrder)

    menuArray.forEach(function(menuItem) {

        menuInfo += `
        <div class="menu-wrapper">
            <div class="menu-pic" id="menu-pic">${menuItem.emoji}</div>
            <div class="menu-info" id="menu-info">
                <div class="item-name" id="item-name">${menuItem.name}</div>
                <div  class="item-ingredients" id="item-ingredients">${menuItem.ingredients}</div>
                <div class="item-price" id="item-price">$${menuItem.price}</div>
            </div>
            <button class="add-item-btn" data-add-item-id="${menuItem.id}">+</button>
        </div>
        <hr>
        `        
        
    })

    
    return menuInfo
}

function renderMenu(){
    document.getElementById('menu-items').innerHTML = displayMenu()
}

renderMenu()

// Start working on code HERE!!
const addItemBtn = document.querySelector(`[data-add-item-id="${menuItem.id}"]`)
addItemBtn.addEventListener("click", displayOrder)



function displayOrder() { 
    
    const orderDetails = document.getElementById('order-details')
    const orderPizza = 0
    const orderHamburger = 1
    const orderBeer = 2

    menuArray.forEach(function(item) {
            if(item.id === orderPizza) 
                orderDetails.innerHTML = `
                <div class="order-wrapper">
                    <div class="item-name" id="item-name">${item.name}</div>
                    <div class="remove">remove</div>
                    <div class="item-price" id="item-price">$${item.price}</div>
                </div
                `
             else if(item.id === orderHamburger) 
                orderDetails.innerHTML = `
                <div class="order-wrapper">
                    <div class="item-name" id="item-name">${item.name}</div>
                    <div class="remove">remove</div>
                    <div class="item-price" id="item-price">$${item.price}</div>
                </div>
                `
             else (item.id === orderBeer) 
                orderDetails.innerHTML = `
                <div class="order-wrapper">
                    <div class="item-name" id="item-name">${item.name}</div>
                    <div class="remove">remove</div>
                    <div class="item-price" id="item-price">$${item.price}</div>
                </div>
              `
        })
}    

// function renderOrder() {
//     document.getElementById('order-details').innerHTML = displayOrder()
// }

// renderOrder()




// Add menu button //

// function displayOrder() {  

//     let orderInfo = ``

    
//     menuArray.forEach(function(orderItem) {
//         orderInfo += `                               
//         <div class="order-wrapper">
//             <div class="order-item">${orderItem.name}</div>
//             <button class="remove" id="remove">remove</button>
//             <div class="item price">${orderItem.price}</div>
//         </div>
//             <hr>        
//         `
//         })    
//         return orderInfo
    
    
//     }   



// function renderOrderDetails(){    
    
//     let addItemBtn = document.querySelectorAll('.add-item-btn') 

//     addItemBtn.forEach((btn) => {
//         btn.addEventListener("click", function(e){       
//             document.getElementById("order-details").innerHTML = e.target.id
//            }) 
//     })

// }
    
// renderOrderDetails()
