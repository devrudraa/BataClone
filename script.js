let NavLogo = document.querySelector("#MainNav>img");
window.onscroll = function (e) {
    // console.log(window.scrollY);
    if (window.scrollY > 99) {
        console.log("Show Logo");
        NavLogo.style.visibility = "visible";
        NavLogo.style.transform = "translate(0, 0)";
    } else {
        // NavLogo.style.width = "7rem";
        NavLogo.style.transform = "translate(-10em, 0)";
        NavLogo.style.visibility = "hidden";

    }
}


// Adding Shoping Cards to the div
let ShoeCard = document.getElementById("shoeCards");
for (let i = 0; i < 5; i++) {
    ShoeCard.innerHTML += ` <div class="card glassBg">
    <img src="Images/shoe_black.png" alt="shoe_black.jpeg">
    <div class="info">
        <img src="Images/power.webp" alt="Power.webp">
        <h1>Power Shoe Black for men</h1>
        <div class="price">
            <span class="new">₹1,200</span>
            <span class="Cut old">₹1,200</span>
        </div>
        <label for="Price">Inclusive of all taxes</label>
        <h3>COLOR: Black</h3>
        <div class="buttons" style="display: grid;">
            <button class="cardbuttons">Order Now
                <span class="material-symbols-outlined">
                    <!-- shopping_bag -->
                </span>
            </button>
            <button class="cardbuttons">Add To Cart
                <span class="material-symbols-outlined">
                    <!-- add_shopping_cart -->
                </span>
            </button>
        </div>
    </div>
    </div>`;
}


// Showing the nav on button click
let burger = document.querySelector("#burger");
let mainnav = document.querySelector("#MainNav");
burger.addEventListener('click', () => {
    mainnav.classList.toggle("ShowNav");
});

// Hide the nav on button click
let NavClose = document.querySelector("#NavClose");
NavClose.addEventListener('click', () => {
    mainnav.classList.toggle("ShowNav");
});
