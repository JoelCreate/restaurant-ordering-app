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

    if(e.target.dataset.option === "0") {
        const orderDetails = `
        <div>
            ${pizza.map((item) => `
            <div class="order-wrapper">
                <div class="order-item">${item.name}
                <button class="remove" id="remove">remove</button>
                </div>                
                <div class="order-item">$${item.price}</div>
            </div>`).join("")}
        </div>
        `
        document.getElementById("order-details").innerHTML += orderDetails
    } else if(e.target.dataset.option === "1") {
        const orderDetails = `
        <div>
            ${hamburger.map((item) => `
            <div class="order-wrapper">
                <div class="order-item">${item.name}
                <button class="remove" id="remove">remove</button>
                </div>                
                <div class="order-item">$${item.price}</div>
            </div>`).join("")}
        </div>
        `
        document.getElementById("order-details").innerHTML += orderDetails
    } else {
        const orderDetails = `
        <div>
            ${beer.map((item) => `
            <div class="order-wrapper">
                <div class="order-item">${item.name}
                <button class="remove" id="remove">remove</button>
                </div>                
                <div class="order-item">$${item.price}</div>
            </div>`).join("")}
        </div>
        `
        document.getElementById("order-details").innerHTML += orderDetails
    }

}



// document.addEventListener('click', function(e) {
    
//     const orderDetails = ``

//     if(e.target.dataset.option === "0"){

//         const findPizza = menuArray.filter((item) => item.name === "Pizza")
//         const 
//         orderDetails.innerHTML = 
       
//     }

    


    

    // if(e.target.dataset.option === "0"){
    //     const pizza = menuArray.filter((item) => {
    //         return item.name.includes("Pizza")
    //     })  
    //     orderDetails.innerHTML =`<div class="order-item">${item.name}</div> `
        
    // } else if (e.target.dataset.option === "1") {
    //     //document.getElementById('order-details').innerHTML = displayOrder()
    // } else {
        
    // }




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
// }  






// function renderAddItemBtn() {
//     let addFoodItem = ``

//     menuArray.forEach(function(item) {
//         addFoodItem += `<button class="add-item-btn" id="${item.id}">+</button>`
//     })

//     addItemBtn.innerHTML = addFoodItem 

// }

// renderAddItemBtn()





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







// function renderOrderDetails(){    
    
//     let addItemBtn = document.querySelectorAll('.add-item-btn') 

//     addItemBtn.forEach((btn) => {
//         btn.addEventListener("click", function(e){       
//             document.getElementById("order-details").innerHTML = e.target.id
//            }) 
//     })

// }
    
// renderOrderDetails()
