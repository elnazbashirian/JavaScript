function sortDrinkByPrice(drinks) {
  for (let i = 0; i < drinks.length; i++) {
    for (let j = i + 1; j < drinks.length; j++) {
      if (drinks[i].price > drinks[j].price) {
        temp = drinks[i];
        drinks[i] = drinks[j];
        drinks[j] = temp;
      }
    }
  }
  console.log(drinks);
}
drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

sortDrinkByPrice(drinks);
