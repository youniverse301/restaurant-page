const backContainer = document.createElement('div');
backContainer.setAttribute('id','backContainer');
const menuBack = document.createElement('div');
menuBack.setAttribute('id','menuBack');




function createPizzaMenu() {
  const menuBack = document.getElementById("menuBack");
  const menuItems = ['Cheese', 'Pepperoni', 'Vegetable', 'Meat Lovers', 'Hawaiian', 'Margherita'];
  const menuPrices = ['$5.00', '$6.00', '$6.50', '$7.50', '$7.00', '$6.00'];
  const menuPics = ["./imgs/cheese-pizza.jpeg", "./imgs/pepperoni-pizza.jpeg",
  "./imgs/vegetable-pizza.png", "./imgs/meat-lovers-pizza.jpeg",
   "./imgs/hawaiian-pizza.jpeg", "./imgs/margherita-pizza.png"]

  const currentMenuItems = menuBack.getElementsByClassName("menu-item");
  if (currentMenuItems.length < 6) {
    for (let i = currentMenuItems.length; i < menuItems.length && i < 6; i++) {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      const itemImg = document.createElement("img");
      itemImg.src = menuPics[i];
      const itemTitle = document.createElement("h2");
      itemTitle.innerHTML = menuItems[i];
      const itemPrice = document.createElement("h2");
      itemPrice.innerHTML = menuPrices[i];
      menuItem.appendChild(itemImg);
      menuItem.appendChild(itemTitle);
      menuItem.appendChild(itemPrice);
      menuBack.appendChild(menuItem);
    }
  }
}


function loadMenu() {
    content.appendChild(backContainer);
    backContainer.appendChild(menuBack);
    createPizzaMenu();
}

export default loadMenu;