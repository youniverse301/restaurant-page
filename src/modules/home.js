
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

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('homeBtn');
    homeBtn.setAttribute('id','btn');
    homeBtn.innerHTML="Home";

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menuBtn');
    menuBtn.setAttribute('id','btn');
    menuBtn.innerHTML="Menu";

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('aboutBtn');
    aboutBtn.setAttribute('id','btn');
    aboutBtn.innerHTML="About";

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contactBtn');
    contactBtn.setAttribute('id','btn');
    contactBtn.innerHTML="Contact";

    menuBtn.addEventListener('click', function() {
        h1.remove()
        h2.remove()
    })

    homeBtn.addEventListener('click', function() {
        content.appendChild(h1);
        content.appendChild(h2);
    })
    
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





export default loadContent;
