






// JSON data
const data = [
    {
        "name": "Cosmetics",
        "productList": [
            {
                "name": "Hair Oil",
                "price": 122
            },
            {
                "name": "Face wash",
                "price": 123
            }
        ]
    },
    {
        "name": "Household",
        "productList": [
            {
                "name": "Hair Oil",
                "price": 122
            },
            {
                "name": "Face wash",
                "price": 123
            }
        ]
    }
];

// Function to create product boxes
function createProductBox(category, product) {
    const container = document.querySelector(".container");
    const productBox = document.createElement("div");
    productBox.classList.add("product-box");

    productBox.innerHTML = `
        <h2>${category}</h2>
        <div class="product">
            <p>Name: ${product.name}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="remove-from-cart">Remove from Cart</button>
        </div>
    `;

    container.appendChild(productBox);

    const addToCartButton = productBox.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => {
        addToCart(product);
    });

    const removeFromCartButton = productBox.querySelector(".remove-from-cart");
    removeFromCartButton.addEventListener("click", () => {
        removeFromCart(product);
    });
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    console.log("Product Added to the cart.");
    console.log("List of product present in cart array:", cart);
    updateCartUI();
}

// Function to remove a product from the cart
function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log("Product removed from the cart.");
        console.log("List of product present in cart array:", cart);
        updateCartUI();
    }
}

// Function to update the cart UI
function updateCartUI() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });
}

// Initialize an empty cart
const cart = [];

// Load and display products from the JSON data
data.forEach((category) => {
    category.productList.forEach((product) => {
        createProductBox(category.name, product);
    });
});
