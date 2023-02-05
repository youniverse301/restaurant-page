const backContainer = document.createElement('div');
backContainer.setAttribute('id','backContainer');
const menuBack = document.createElement('div');
menuBack.setAttribute('id','menuBack');


function createPizzaMenu() {
    const menuBack = document.getElementById("menuBack");
    const menuItems = ['Cheese', 'Pepperoni', 'Vegetable', 'Meat Lovers', 'Hawaiian', 'Margherita'];
    const menuPrices = ['$5.00', '$6.00', '$6.50', '$7.50', '$7.00', '$6.00'];
    const menuPics = ["../dist/imgs/cheese-pizza.jpeg", "../dist/imgs/pepperoni-pizza.jpeg",
    "../dist/imgs/vegetable-pizza.png", "../dist/imgs/meat-lovers-pizza.jpeg",
     "../dist/imgs/hawaiian-pizza.jpeg", "../dist/imgs/margherita-pizza.png"]
  
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      const itemImg = document.createElement("img");
      itemImg.src = menuPics[i];
      const itemTitle = document.createElement("h2");
      itemTitle.innerHTML = menuItems[i];
      //itemTitle.setAttribute('id', menuItems[i])
      const itemPrice = document.createElement("h2");
      itemPrice.innerHTML = menuPrices[i];
      menuItem.appendChild(itemImg);
      menuItem.appendChild(itemTitle);
      menuItem.appendChild(itemPrice);
      menuBack.appendChild(menuItem);
    }
  }

function loadMenu() {
    document.getElementById("title").remove();
    document.getElementById("slogan").remove();
    content.appendChild(backContainer);
    backContainer.appendChild(menuBack);
    createPizzaMenu();
}

export default loadMenu;