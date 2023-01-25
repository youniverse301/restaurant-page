
    const content = document.getElementById('content')
    const mainImg = document.createElement('img');
    mainImg.classList.add('mainImg');
    mainImg.src = "https://thoughtcatalog.com/wp-content/uploads/2014/10/shutterstock_163838306.jpg?w=1000&h=667&crop=1"
    console.log('yo')
    
    const h1 = document.createElement('h1');
    h1.classList.add('title')
    h1.innerHTML = "Giovanni's Pizza"

    const h2 = document.createElement('h2');
    h2.classList.add('slogan')
    h2.innerHTML = "Freshly Picked From The Oven"

    const navBar = document.createElement('div');
    navBar.classList.add('navBar');




    function displayContent() {
        content.appendChild(mainImg);
        content.appendChild(h1);
        content.appendChild(h2);
        content.appendChild(navBar);
    }





export default displayContent;
