// Variables
var allStoresEl = document.getElementById("#allStores")
var addressEl = document.getElementById("#address")

// Buttons
var storesButton = document.getElementById("storesButton")

const stores = [
    { 
        store: "Arc’teryx",
        address: "Address: 356 Santana Row, Suite 1001 | Phone: 408-642-1611"
    },
    {
        store: "Athleta",
        address: "378 Santana Row | Phone: 408-538-1208"
    }
    ]

function showStores(stores) {
    allStores = `
    <p>${stores.store}</p>
    `;
    allStoresEl.innerHTML = allStores
    
}