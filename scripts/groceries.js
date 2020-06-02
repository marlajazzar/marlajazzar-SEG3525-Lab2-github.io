// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
    {
        name: "Brocoli ",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        nonOrganic: false,
        price: 1.99
    },
    {
        name: "Bread ",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        nonOrganic: false,
        price: 2.35
    },
    {
        name: "Salmon ",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        nonOrganic: true,
        price: 12.98
    },
    {
        name: "Apple ",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        nonOrganic: true,
        price: 1.45
    },
    {
        name: "Banana ",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        nonOrganic: false,
        price: 4.05
    },
    {
        name: "Chocolate Croissant ",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        nonOrganic: true,
        price: 0.75
    },
    {
        name: "Pancake ",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        nonOrganic: false,
        price: 10.23
    },
    {
        name: "Chicken ",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        nonOrganic: false,
        price: 12.99
    },
    {
        name: "Tuna ",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        nonOrganic: true,
        price: 4.99
    },
    {
        name: "Pizza ",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        nonOrganic: true,
        price: 5.29
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
    let product_names = [];
    for (let i=0; i<prods.length; i+=1) {
            if ((restriction == "Vegetarian_Org") && ((prods[i].vegetarian == true) && (prods[i].organic == true)) ){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "Vegetarian_NonOrg") && ((prods[i].vegetarian == true) && (prods[i].nonOrganic == true))){
            product_names.push(prods[i].name);
        }
        else if((restriction == "GlutenFree_Org") && ((prods[i].glutenFree == true) && (prods[i].organic == true))) {
                product_names.push(prods[i].name);
            }
            else if ((restriction == "GlutenFree_NonOrg") && ((prods[i].glutenFree == true) && (prods[i].nonOrganic == true))){
                product_names.push(prods[i].name);
            }
            else if ((restriction == "Vegetarian_GlutenFree_Org") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].organic == true))){
                product_names.push(prods[i].name);
            }
            else if ((restriction == "Vegetarian_GlutenFree_NonOrg") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].nonorganic == true))){
                product_names.push(prods[i].name);
            }
        else if (restriction == "None"){
            product_names.push(prods[i].name);
        }
    }
    return product_names;
}

function restrictListProducts2(prods, restriction) {
    let product_names2 = [];
    for (let i=0; i<prods.length; i+=1) {
        if ((restriction == "Vegetarian_Org") && ((prods[i].vegetarian == true) && (prods[i].organic == true)) ){
            product_names2.push(prods[i]);
        }
        else if ((restriction == "Vegetarian_NonOrg") && ((prods[i].vegetarian == true) && (prods[i].nonOrganic == true))){
            product_names2.push(prods[i]);
        }
        else if((restriction == "GlutenFree_Org") && ((prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names2.push(prods[i]);
        }
        else if ((restriction == "GlutenFree_NonOrg") && ((prods[i].glutenFree == true) && (prods[i].nonOrganic == true))){
            product_names2.push(prods[i]);
        }
        else if ((restriction == "Vegetarian_GlutenFree_Org") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].organic == true))){
            product_names2.push(prods[i]);
        }
        else if ((restriction == "Vegetarian_GlutenFree_NonOrg") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].nonorganic == true))){
            product_names2.push(prods[i]);
        }
        else if (restriction == "None"){
            product_names2.push(prods[i]);
        }
    }
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort (inspirer)
    product_names2.sort(function (x, y) {
        return x.price-y.price;
    });

    return product_names2;
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
   let totalPrice = 0;
    for (let i=0; i<products.length; i+=1) {
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}
