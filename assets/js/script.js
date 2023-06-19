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


    /*
 * declare map as a global variable
 */
var map;

/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function () {

  /*
   * create map
   */
  var map = new google.maps.Map(document.getElementById("map_div"), {
    center: new google.maps.LatLng(37.3199, -121.9483),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  /*
   * create infowindow (which will be used by markers)
   */
  var infoWindow = new google.maps.InfoWindow();

  /*
   * marker creater function (acts as a closure for html parameter)
   */
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }

  /*
   * add markers to map
   */
  var marker0 = createMarker({
    position: new google.maps.LatLng(33.808678, -117.918921),
    map: map,
    icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
  }, "<h1>Marker 0</h1><p>This is the home marker.</p>");

  var marker1 = createMarker({
    position: new google.maps.LatLng(33.818038, -117.928492),
    map: map
  }, "<h1>Marker 1</h1><p>This is marker 1</p>");

  var marker2 = createMarker({
    position: new google.maps.LatLng(33.803333, -117.915278),
    map: map
  }, "<h1>Marker 2</h1><p>This is marker 2</p>");
});


// added event listener but button is not working
seeMap.addEventListener("click", function (event) {
    showMap(map)
})

function showMap(map) {
    google.map = ``
    for (var i = 0; i < map.length; i++) {

    }}