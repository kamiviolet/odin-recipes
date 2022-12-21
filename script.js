"use strict"

const recipeTypes = [
    {type: "appretizer", src:"images/deep-fried-spring-rolls.jpg"},
    {type: "soup", src:"images/salmon-soup.jpg"},
    {type: "main", src:"images/pork-schnitzel.jpg"},
    {type: "dessert", src:"images/tiramisu-cake.jpg"},
];
const mainMenu = document.querySelector(".main-menu");

for (const type of recipeTypes) {
    const menuIcon = document.createElement("a");
    menuIcon.setAttribute("href", `#${type["type"]}`);
    menuIcon.classList.add("categories", "folded");
    menuIcon.innerHTML = type["type"];
    menuIcon.style.background = `url("${type['src']}" ) no-repeat top center`;
    menuIcon.style.backgroundSize = "cover 100%";
    mainMenu.append(menuIcon);
}
const categories = document.querySelectorAll(".categories");

//recipe content
let showRecipe = () => {
    const dishes = document.querySelectorAll(".recipe");

    document.addEventListener("click", (e) => {
        const selectedType = e.target.innerHTML;
        
        if (e.target.classList.contains("categories")) {
            for (const category of categories) {
                category.classList.replace("stretched", "folded");
            }
    
            if (e.target.classList.contains("categories")) {
                e.target.classList.replace("folded", "stretched");
            }

            for (const dish of dishes) {
                dish.classList.replace("show", "hidden");
            }

            for (const dish of dishes) {
                if (dish.classList.contains(`${selectedType}`)) {
                    dish.classList.replace("hidden", "show");
                }
            }
        }
    })
}
showRecipe();