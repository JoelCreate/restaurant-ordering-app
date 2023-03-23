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



const addItemBtn = document.getElementById('add-item-btn')

addItemBtn.addEventListener("click", function(e) {
    console.log(e.target.id)
    //let orderDetails = document.getElementById('order-details')
    
    // if (e.target.id < 1) {
    //     console.log("pizza")
    //  } else if (e.target.id = 1) {
    //     console.log("hamburger")
    //  } else {
    //     console.log("beer")
    //  }
})

function renderAddItemBtn() {
    let addFoodItem = ``

    menuArray.forEach(function(item) {
        addFoodItem += `<button class="add-item-btn" id="${item.id}">+</button>`
    })

    addItemBtn.innerHTML = addFoodItem 

}

renderAddItemBtn()





// function displayOrder() { 
    
//     const orderDetails = document.getElementById('order-details')
//     // const orderPizza = 0
//     // const orderHamburger = 1
//     // const orderBeer = 2

//      if(e.target.id === 0) {
//         `<div>PIZZA</div>`
//      } else if (e.target.id === 1) {
//         `<div>HAMBURGER</div`
//      } else {
//         `<div>BEER</div>`
//      }
      
// }    




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
