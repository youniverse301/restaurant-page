
    const content = document.getElementById('content')
    const mainImg = document.createElement('img');
    mainImg.classList.add('mainImg');
    mainImg.src = "https://thoughtcatalog.com/wp-content/uploads/2014/10/shutterstock_163838306.jpg?w=1000&h=667&crop=1"
   console.log('eeee') 

   
    const h1 = document.createElement('h1');
    h1.setAttribute('id','title');
    h1.innerHTML = "Giovanni's Pizza"

    const h2 = document.createElement('h2');
    h2.setAttribute('id','slogan');
    h2.innerHTML = "Freshly Picked From The Oven"

    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('btn');
    homeBtn.setAttribute('id','homeBtn');
    homeBtn.innerHTML="Home";

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('btn');
    menuBtn.setAttribute('id','menuBtn');
    menuBtn.innerHTML="Menu";

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('btn');
    aboutBtn.setAttribute('id','aboutBtn');
    aboutBtn.innerHTML="About";

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('btn');
    contactBtn.setAttribute('id','contactBtn');
    contactBtn.innerHTML="Contact";

    function removeMenu () {
        const menuItems = document.querySelectorAll(".menu-item");
        const menuBack = document.getElementById("menuBack");
        for (let i = 0; i < menuItems.length; i++) {
            menuBack.removeChild(menuItems[i]);
          }
        document.getElementById("backContainer").remove();
        document.getElementById("menuBack").remove();
    }

    function loadHome () {
        content.appendChild(h1);
        content.appendChild(h2);
        removeMenu();
    }
    
    function loadContent() {
        content.appendChild(mainImg);
        content.appendChild(h1);
        content.appendChild(h2);
        content.appendChild(navBar);
        navBar.appendChild(homeBtn);
        navBar.appendChild(menuBtn);
        navBar.appendChild(aboutBtn);
        navBar.appendChild(contactBtn);
    }





export {loadContent, loadHome};
