// Variables
const allStoresEl = document.getElementById("stores")
const addressEl = document.getElementById("address")


// Buttons
var storesButton = document.getElementById("storesButton")

const stores = [
    {
        id: "arcteryx",
        store: "Arc’teryx",
        address: "Address: 356 Santana Row, Suite 1001 | Phone: 408-642-1611",
        products: [
            { 
                name: 'Norvan Vest',
                url: 'https://www.arcteryx.com/us/en/shop/norvan-14-vest'
            },
            { 
                name: 'Granville',
                url: 'https://www.arcteryx.com/us/en/shop/granville-crossbody-bag'
            },
            { 
                name: 'Nuclei',
                url: 'https://www.arcteryx.com/us/en/shop/mens/nuclei-vest'
            }            
        ]
    },
    {
        id: "athleta",
        store: "Athleta",
        address: "Address: 378 Santana Row | Phone: 408-538-1208",
        products: [
            { 
                name: 'Brooklyn',
                url: 'https://athleta.gap.com/browse/product.do?pid=534779032&cid=89745&pcid=89745&vid=1&nav=meganav%3ADresses%3ACATEGORIES%3AAll%20Dresses%20%26%20Rompers#pdp-page-content'
            },
            { 
                name: 'Excursion',
                url: 'https://athleta.gap.com/browse/product.do?pid=882790022&cid=1032096&pcid=1032096&vid=1&nav=meganav%3AAccessories%3ACATEGORIES%3AAll%20Accessories#pdp-page-content'
            },
            { 
                name: 'Poplin',
                url: 'https://athleta.gap.com/browse/product.do?pid=587913032&cid=1032080&pcid=1032080&vid=1&nav=meganav%3ATops%3ACATEGORIES%3AAll%20Tops#pdp-page-content'
            }            
        ]
    },
    {
        id: "harajuku",
        store: "Boutique Harajuku",
        address: "Address: 378 Santana Row Suite 1025 | Phone: 408-260-2150",
        products: [
            { 
                name: 'Frill',
                url: 'https://www.harajukuboutique.com/product-page/pattern-frill-dress'
            },
            { 
                name: 'Magic',
                url: 'https://www.harajukuboutique.com/product-page/magic-jacket'
            },
            { 
                name: 'Candice',
                url: 'https://www.harajukuboutique.com/product-page/candice-o-less-1'
            }            
        ]
    },
    {
        id: "kendrascott",
        store: "Kendra Scott",
        address: "Address: 334 Santana Row, Suite 1070 | Phone: 669-231-0300",
        products: [
            { 
                name: 'Susie',
                url: 'https://www.kendrascott.com/new/shop-all-new-arrivals/susie-pendant-necklace-layering-set-of-2/susie-layering-set.html?dwvar_susie-layering-set_metal=GLD'
            },
            { 
                name: 'Emilie',
                url: 'https://www.kendrascott.com/gifts-150-and-under/emilie-bracelet-set-of-2/emilie-bracelet-set.html?dwvar_emilie-bracelet-set_stoneColor=970'
            },
            { 
                name: 'Madison',
                url: 'https://www.kendrascott.com/madison-daisy-earring-set/madison-earring-set.html?dwvar_madison-earring-set_metal=GLD'
            }            
        ]
    }
]

storesButton.addEventListener("click", function (event) {
    showStores(stores)
})

function showStores(stores) {
    allStores = ``
    for (var i = 0; i < stores.length; i++) {
        allStores += `<p>${stores[i].store}</p>`;
        allStores += `<button id=${stores[i].id}Button>See products</button>`
        allStores += `<div id=${stores[i].id}Products></div>`
    }
    allStoresEl.innerHTML = allStores
    console.log(stores)

    stores.forEach(function(store) {
        var seeProductsButton = document.getElementById(`${store.id}Button`);
        seeProductsButton.addEventListener("click", function (event) {
            console.log('opening' + store.id)
            showProducts(store.id, store.products)
        })

    })
}

function showProducts(storeId, products) {
    console.log("adding to " + storeId)
    var productsEl = document.getElementById(`${storeId}Products`)
    var allProducts = ``
    for (var i = 0; i < products.length; i++) {
        // allProducts += `<p>${products[i].name}</p>`
        // allProducts += `<p> <a href="https://www.arcteryx.com/us/en/shop/norvan-14-vest">  Norvan Vest        </a> </p>`
        allProducts += `<p> <a href="${products[i].url}">   ${products[i].name}  </a> </p>`
    }
    productsEl.innerHTML = allProducts
}

// localStorage.setItem('products', JSON.stringify(stores))
    // var storageItem = JSON.parse(localStorage.getItem('products'))