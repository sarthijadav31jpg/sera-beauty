fetch("/Components/header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("/Components/navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;
});

fetch("/Components/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});


let selectedShade = "";

function selectShade(shade) {
    selectedShade = shade;
    document.getElementById("shade").innerHTML =
        "Selected Shade: " + shade;
}

function addToCart() {
    if (selectedShade === "") {
        alert("Please select a shade first!");
    } else {
        alert("Lipstick added to cart! Shade: " + selectedShade);
    }
}


// SERA BEAUTY LIPSTICK COLLECTION

const lipstickProducts = {

    Nude: [
        { name: "Nude Rose", image: "nude1.jpg", price: 499 },
        { name: "Warm Beige", image: "nude2.jpg", price: 499 },
        { name: "Mocha Nude", image: "nude3.jpg", price: 549 },
        { name: "Soft Nude", image: "nude4.jpg", price: 549 }
    ],

    Pink: [
        { name: "Baby Pink", image: "pink1.jpg", price: 499 },
        { name: "Rose Pink", image: "pink2.jpg", price: 499 },
        { name: "Dusty Pink", image: "pink3.jpg", price: 549 },
        { name: "Soft Pink", image: "pink4.jpg", price: 549 }
    ],

    Red: [
        { name: "Classic Red", image: "red1.jpg", price: 499 },
        { name: "Cherry Red", image: "red2.jpg", price: 499 },
        { name: "Ruby Red", image: "red3.jpg", price: 549 },
        { name: "Wine Red", image: "red4.jpg", price: 549 }
    ],

    Brown: [
        { name: "Chocolate Brown", image: "brown1.jpg", price: 499 },
        { name: "Coffee Brown", image: "brown2.jpg", price: 499 },
        { name: "Cocoa Brown", image: "brown3.jpg", price: 549 },
        { name: "Mocha Brown", image: "brown4.jpg", price: 549 }
    ]

};

let currentColour = "Nude";
let currentIndex = 0;
let totalCart = 0;

function showCollection(colour) {

    currentColour = colour;
    currentIndex = 0;

    document.getElementById("collection-title").innerText =
        colour + " Collection";

    showProduct();
}

function showProduct() {

    let product = lipstickProducts[currentColour][currentIndex];

    document.getElementById("product-details").innerHTML = `

        <img src="../image/${product.image}"
             alt="${product.name}">

        <h3>${product.name}</h3>

        <p>Price: ₹${product.price}</p>

        <p>Shade ${currentIndex + 1} of 4</p>

        <button onclick="addLipstickToCart()">
            Add to Cart
        </button>

    `;
}

function nextShade() {

    currentIndex++;

    if (currentIndex >= 4) {
        currentIndex = 0;
    }

    showProduct();
}

function previousShade() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = 3;
    }

    showProduct();
}

function addLipstickToCart() {

    totalCart++;

    document.getElementById("cart-count").innerText =
        totalCart;

    alert("Lipstick added to cart!");
}

