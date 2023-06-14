// Variables
const allStoresEl = document.getElementById("stores")
const addressEl = document.getElementById("address")


// Buttons
var storesButton = document.getElementById("storesButton")

const stores = [
    { 
        store: "Arc’teryx",
        address: "Address: 356 Santana Row, Suite 1001 | Phone: 408-642-1611"
    },
    {
        store: "Athleta",
        address: "Address: 378 Santana Row | Phone: 408-538-1208"
    },
    {
        store: "Boutique Harajuku",
        address: "Address: 378 Santana Row Suite 1025 | Phone: 408-260-2150"
    },
    {
        store: "Kendra Scott",
        address: "Address: 334 Santana Row, Suite 1070 | Phone: 669-231-0300"
    }
    ]

storesButton.addEventListener("click", function(event){
    showStores(stores)
})

function showStores(stores) {
    allStores = ``
    for (var i = 0; i < stores.length; i++){
    allStores +=`<p>${stores[i].store}</p>
    `;
    }
    allStoresEl.innerHTML = allStores
    console.log(stores)
}