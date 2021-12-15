const menu = [
  {
    type: "pizza",
    product: [
      {
        name: "Four Seasons",
        ingredients: "pomodoro, mozzarella, ham, capsicum, mushrooms & prawns",
        price: 22,
      },
      {
        name: "Marinara",
        ingredients: "pomodoro, mozzarella, prawns, smoked mussels & garlic",
        price: 22,
      },
      {
        name: "Capricciosa",
        ingredients: "pomodoro, mozzarella, ham, mushroom & olives",
        price: 21,
      },
      {
        name: "Napoletana",
        ingredients: "pomodoro, mozzarella, anchovies & olives",
        price: 21,
      },
      {
        name: "Ham",
        ingredients: "pomodoro, mozzarella & mushroom",
        price: 18,
      },
      {
        name: "Margherita",
        ingredients: "pomodoro, mozzarella, oregano",
        price: 21,
      },
    ],
  },
  {
    type: "pasta",
    product: [
      {
        name: "Marinara",
        ingredients: "mixed seafood with garlic, pomodoro & white wine sauce",
        price: 24,
      },
      {
        name: "Carbonara",
        ingredients: "bacon, onion, egg, white wine & cream",
        price: 21,
      },
      {
        name: "Fiorentina",
        ingredients: "spinach, ricotta & cream",
        price: 22,
      },
      {
        name: "Siciliana",
        ingredients: "pomodoro, eggplant, chili, & basil",
        price: 22,
      },
      {
        name: "Boscaiola",
        ingredients: "bacon, cream, mushroom & shallots",
        price: 21,
      },
      {
        name: "Lasagna",
        ingredients: "traditional beef & pomodoro sauce",
        price: 21,
      },
    ],
  },
  {
    type: "deserts",
    product: [
      {
        name: "Affogato",
        ingredients: "vanilla gelato & shot of espresso",
        price: 8,
      },
      { name: "Creme Brulee", ingredients: "vanilla & cream", price: 11 },
      {
        name: "Chocolate Lava Cake",
        ingredients: "organic butter, belgian chocolate & vanilla gealto",
        price: 12,
      },
      {
        name: "Tiramisu",
        ingredients:
          "zabaglione cream, mascarpone cream, espresso, cacao liquor & coco powder",
        price: 14,
      },
      {
        name: "Caramelized Crepe",
        ingredients: "banans, nutella, caramel & vanilla gelato",
        price: 12,
      },
      {
        name: "Gelato",
        ingredients:
          "two scops of gelato topped with fresh macerated berries & chantilly cream",
        price: 8,
      },
    ],
  },
];

const containerForMenu = document.querySelector(".container");

for (let i of menu) {
  generateMenu("pizza", i);
  generateMenu("pasta", i);
  generateMenu("deserts", i);
}

function generateMenu(typeOfFood, i) {
  if (i.type === typeOfFood) {
    const productType = document.createElement("div");
    productType.classList = "product-type";

    const typeTitle = document.createElement("h1");
    typeTitle.classList = "type-title";
    typeTitle.textContent = i.type;
    productType.appendChild(typeTitle);
    containerForMenu.appendChild(productType);

    const productContainer = document.createElement("div");
    productContainer.classList = "product-container";
    productType.appendChild(productContainer);

    for (let k of i.product) {
      const product = document.createElement("div");
      product.classList = "product";
      productContainer.appendChild(product);

      const productInfoContainer = document.createElement("div");
      productInfoContainer.classList = "product-info-container";

      const productTitle = document.createElement("h1");
      productTitle.textContent = k.name;
      productTitle.classList = "product-title";
      productInfoContainer.appendChild(productTitle);

      const ingredients = document.createElement("div");
      ingredients.textContent = k.ingredients;
      ingredients.classList = "ingredients";
      productInfoContainer.appendChild(ingredients);

      const price = document.createElement("p");
      price.textContent = `$${k.price}`;
      price.classList = "price";
      product.appendChild(price);

      product.appendChild(productInfoContainer);
    }
  }
}
