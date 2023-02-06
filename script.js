let productCards = document.getElementsByClassName("product-card");

let productCardClasses =
{
"allFilter":       ["inherit", "inherit", "inherit", "inherit", "inherit", "inherit", "inherit", "inherit", "inherit"],

"appFilter":       ["inherit", "none",    "inherit", "none",    "none",    "none",    "none",    "none",    "none"],

"marketingFilter": ["none",    "inherit", "none",    "inherit", "none",    "inherit", "none",    "none",    "none"],

"designFilter":    ["none",    "none",    "none",    "none",    "inherit", "none",    "inherit", "none",    "none"],

"websiteFilter":   ["none",    "none",    "none",    "none",    "none",    "none",    "none",    "inherit", "inherit"]
}

function classNameArrange(itemArray, classArray) {
    for (let itemIndex = 0; itemIndex < itemArray.length; ++itemIndex) {
        itemArray[itemIndex].className = "product-card " + classArray[itemIndex];
    }
}

function cardFilter (cardType) {
    classNameArrange (productCards, productCardClasses[cardType]);
}
