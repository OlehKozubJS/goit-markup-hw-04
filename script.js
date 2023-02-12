let productCards = document.getElementsByClassName("product-card");

let productCardClasses =
{
"allFilter":       ["", "", "", "", "", "", "", "", ""],

"appFilter":       ["", " none", "", " none", " none", " none", " none", " none", " none"],

"marketingFilter": [" none", "", " none", "", " none", "", " none", " none", " none"],

"designFilter":    [" none", " none", " none", " none", "", " none", "", " none", " none"],

"websiteFilter":   [" none", " none", " none", " none", " none", " none", " none", "", ""]
}

function classNameArrange(itemArray, classArray) {
    for (let itemIndex = 0; itemIndex < itemArray.length; ++itemIndex) {
        itemArray[itemIndex].className = "product-card" + classArray[itemIndex];
    }
}

function cardFilter (cardType) {
    classNameArrange (productCards, productCardClasses[cardType]);
}
