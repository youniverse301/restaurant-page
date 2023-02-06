const aboutContainer = document.createElement('div');
aboutContainer.setAttribute('id','aboutContainer');
const aboutImg = document.createElement("img");
aboutImg.setAttribute('id','aboutImg');
aboutImg.src = '../dist/imgs/interior.jpeg';
const textBack = document.createElement('div');
textBack.setAttribute('id','textBack');
const aboutTitle = document.createElement('h1');
aboutTitle.setAttribute('id','aboutTitle');
aboutTitle.innerHTML = 'About Us'
const aboutText = document.createElement('div');
aboutText.setAttribute('id','aboutText');
aboutText.innerHTML = " Welcome to our pizza restaurant! We are a family-owned business, established with the goal of providing the best pizza experience for our customers. Our pizzas are made with the freshest ingredients and the traditional methods passed down through generations. We believe in using only the best quality mozzarella cheese, flavorful sauce, and delicious toppings, hand-tossed on our signature thin crust. Our menu features classic as well as unique specialty pizzas, created to suit everyone's taste buds. Join us for a warm and inviting atmosphere, with friendly staff and a relaxed ambiance. Come taste the difference, and enjoy a slice of heaven with every bite."


function loadAbout () {
    content.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutImg);
    aboutContainer.appendChild(textBack);
    textBack.appendChild(aboutText);

}

export {loadAbout};