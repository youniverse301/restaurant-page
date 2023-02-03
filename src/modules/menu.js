const backContainer = document.createElement('div');
backContainer.setAttribute('id','backContainer');
const menuBack = document.createElement('div');
menuBack.setAttribute('id','menuBack');


function createMenu() {
    const menuBack = document.getElementById("menuBack");
  
    for (let i = 0; i < 6; i++) {
      const div = document.createElement("div");
      menuBack.appendChild(div);
      div.classList.add('pizza');
    }
}

function changeMenu() {
    const menuItems = document.querySelectorAll(".pizza");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[0].setAttribute('id','cheese');
        menuItems[0]
    }
}

function menuDetails () {
    const cheese = document.getElementById('cheese');
    const cheeseImg = document.createElement('div');
    cheeseImg.setAttribute('id','cheeseImg');
    const cheeseContainer = document.createElement('div');
    cheeseContainer.setAttribute('id','cheeseContainer');
    const cheeseTitle = document.createElement('h2');
    cheeseTitle.setAttribute('id','cheeseTitle');
    cheeseTitle.innerHTML = 'Cheese Pizza';
    const cheesePrice = document.createElement('h2');
    cheesePrice.setAttribute('id','cheesePrice');
    cheesePrice.innerHTML = '$5.00';
    cheese.appendChild(cheeseContainer);
    cheeseContainer.appendChild(cheeseImg);
    cheeseContainer.appendChild(cheeseTitle);
    cheeseContainer.appendChild(cheesePrice);

}

function loadMenu() {
    document.getElementById("title").remove();
    document.getElementById("slogan").remove();
    content.appendChild(backContainer);
    backContainer.appendChild(menuBack);
    createMenu();
    changeMenu();
    menuDetails();
}

export default loadMenu;