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
            <button class="add-item-btn" id="${menuItem.id}">+</button>
        </div>
        <hr>
        `
    })
    return menuInfo
}


// Add menu button //

function displayOrder() {  
    

    


    // let orderInfo = ``

    
    // menuArray.forEach(function(orderItem) {
    //     orderInfo += `                               
    //     <div class="order-wrapper">
    //         <div class="order-item">${orderItem.name}</div>
    //         <button class="remove" id="remove">remove</button>
    //         <div class="item price">${orderItem.price}</div>
    //     </div>
    //         <hr>        
    //     `
    //     })    
    //     return orderInfo
    
    
    }

    



function renderOrderDetails(){    
    
    let addItemBtn = document.querySelectorAll('.add-item-btn') 

    addItemBtn.forEach((btn) => {
        btn.addEventListener("click", function(e){       
            document.getElementById("order-details").innerHTML = e.target.id
           }) 
    })

}
    
renderOrderDetails()
    
// const removeBtn = document.getElementById('remove')

// if (removeBtn) {
//     removeBtn.addEventListener("click", function(){
//         console.log("hello")
//     })
// }