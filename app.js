import { menuArray } from "./data.js"



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
            <button class="add-item-btn" data-option="${menuItem.id}">+</button>
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


//Add eventListener to all "add-item" buttons

const addItemBtn = document.querySelectorAll('.add-item-btn')

addItemBtn.forEach((button) => {
  button.addEventListener('click', displayOrder)
}) 

function displayOrder(e) {     
    
    const pizza = menuArray.filter(function(item){
        return item.name.includes("Pizza")
    })

    const hamburger = menuArray.filter(function(item){
        return item.name.includes("Hamburger")
    })

    const beer = menuArray.filter(function(item){
        return item.name.includes("Beer")
    })

    const removeItemBtn = `<button class="remove" id="remove">remove</button>`
    

    if(e.target.dataset.option === "0") {
        let orderDetails = `
        <div>
            ${pizza.map((item) => `
            <div class="order-wrapper">
                <div class="order-item">${item.name}
                    ${removeItemBtn}
                </div>                
                <div class="order-item">$${item.price}</div>
            </div>`).join("")}
        </div>
        `
        document.getElementById("order-details").innerHTML += orderDetails
    } else if(e.target.dataset.option === "1") {
        let orderDetails = `
        <div>
            ${hamburger.map((item) => `
            <div class="order-wrapper">
                <div class="order-item">${item.name} 
                    ${removeItemBtn}
                </div>                
                <div class="order-item">$${item.price}</div>
            </div>`).join("")}
        </div>
        `
        document.getElementById("order-details").innerHTML += orderDetails 
              

    } else {
        let orderDetails = `
        <div>
            ${beer.map((item) => `
            <div class="order-wrapper">
                <div class="order-item">${item.name}
                   ${removeItemBtn}
                </div>                
                <div class="order-item">$${item.price}</div>
            </div>`).join("")}
        </div>
        `
        document.getElementById("order-details").innerHTML += orderDetails              
    }


    document.querySelector('.remove').addEventListener('click', function(e) {        
        document.getElementById("order-details").innerHTML = ``
        
    }) 
    
   

    
}


// const removeItemBtn = document.querySelectorAll(".remove")

// removeItemBtn.addEventListener("click", removeItem)
  


// function removeItem(e) {
//     console.log(e.target.id)
// }


