(()=>{"use strict";const e=document.getElementById("content"),t=document.createElement("img");t.classList.add("mainImg"),t.src="https://thoughtcatalog.com/wp-content/uploads/2014/10/shutterstock_163838306.jpg?w=1000&h=667&crop=1";const n=document.createElement("h1");n.setAttribute("id","title"),n.innerHTML="Giovanni's Pizza";const i=document.createElement("h2");i.setAttribute("id","slogan"),i.innerHTML="Freshly Picked From The Oven";const a=document.createElement("div");a.classList.add("navBar");const d=document.createElement("button");d.classList.add("btn"),d.setAttribute("id","homeBtn"),d.innerHTML="Home";const s=document.createElement("button");s.classList.add("btn"),s.setAttribute("id","menuBtn"),s.innerHTML="Menu";const c=document.createElement("button");c.classList.add("btn"),c.setAttribute("id","aboutBtn"),c.innerHTML="About";const o=document.createElement("button");function r(){const e=document.getElementById("content"),t=document.getElementsByClassName("mainImg")[0],n=document.getElementsByClassName("navBar")[0];for(let i=e.children.length-1;i>=0;i--){const a=e.children[i];a!==t&&a!==n&&e.removeChild(a)}}o.classList.add("btn"),o.setAttribute("id","contactBtn"),o.innerHTML="Contact";const l=document.createElement("div");l.setAttribute("id","backContainer");const m=document.createElement("div");m.setAttribute("id","menuBack");const u=document.createElement("div");u.setAttribute("id","aboutContainer");const p=document.createElement("img");p.setAttribute("id","aboutImg"),p.src="../dist/imgs/interior.jpeg";const h=document.createElement("div");h.setAttribute("id","textBack");const b=document.createElement("h1");b.setAttribute("id","aboutTitle"),b.innerHTML="About Us";const g=document.createElement("div");g.setAttribute("id","aboutText"),g.innerHTML=" Welcome to our pizza restaurant! We are a family-owned business, established with the goal of providing the best pizza experience for our customers. Our pizzas are made with the freshest ingredients and the traditional methods passed down through generations. We believe in using only the best quality mozzarella cheese, flavorful sauce, and delicious toppings, hand-tossed on our signature thin crust. Our menu features classic as well as unique specialty pizzas, created to suit everyone's taste buds. Join us for a warm and inviting atmosphere, with friendly staff and a relaxed ambiance. Come taste the difference, and enjoy a slice of heaven with every bite.";const C=document.createElement("div");C.setAttribute("id","contactContainer");const E=document.createElement("div");E.setAttribute("id","contactTitle"),E.innerHTML="Contact Us";const v=document.createElement("div");v.setAttribute("id","contactMid");const z=document.createElement("div");z.setAttribute("id","contactAddress");const L=document.createElement("h1");L.setAttribute("id","addressTitle"),L.innerHTML="Address:";const A=document.createElement("h2");A.setAttribute("id","address"),A.innerHTML="123 Pizza Lane, Pizza Town";const T=document.createElement("div");T.setAttribute("id","contactHours");const f=document.createElement("h1");f.setAttribute("id","hoursTitle"),f.innerHTML="Hours of Operation:";const M=document.createElement("h2");M.setAttribute("id","hours"),M.innerHTML="<p>Monday-Thursday: 11am-9pm</p> <p>Friday-Saturday: 11am-10pm</p> <p>Sunday: 12pm-8pm</p>";const y=document.createElement("div");y.setAttribute("id","contactSocials");const H=document.createElement("h1");H.setAttribute("id","socialsTitle"),H.innerHTML="Stay Connected";const B=document.createElement("h2");B.setAttribute("id","socials"),B.innerHTML="<p>Facebook: @giovannispizza</p> <p>Instagram: @gios.pizza</p> <p>Twitter: @giovannisitalian</p>",e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),a.appendChild(d),a.appendChild(s),a.appendChild(c),a.appendChild(o),homeBtn.addEventListener("click",(function(){r(),e.appendChild(n),e.appendChild(i)})),menuBtn.addEventListener("click",(function(){r(),content.appendChild(l),l.appendChild(m),function(){const e=document.getElementById("menuBack"),t=["Cheese","Pepperoni","Vegetable","Meat Lovers","Hawaiian","Margherita"],n=["$5.00","$6.00","$6.50","$7.50","$7.00","$6.00"],i=["./imgs/cheese-pizza.jpeg","../dist/imgs/pepperoni-pizza.jpeg","../dist/imgs/vegetable-pizza.png","../dist/imgs/meat-lovers-pizza.jpeg","../dist/imgs/hawaiian-pizza.jpeg","../dist/imgs/margherita-pizza.png"],a=e.getElementsByClassName("menu-item");if(a.length<6)for(let d=a.length;d<t.length&&d<6;d++){const a=document.createElement("div");a.classList.add("menu-item");const s=document.createElement("img");s.src=i[d];const c=document.createElement("h2");c.innerHTML=t[d];const o=document.createElement("h2");o.innerHTML=n[d],a.appendChild(s),a.appendChild(c),a.appendChild(o),e.appendChild(a)}}()})),aboutBtn.addEventListener("click",(function(){r(),content.appendChild(u),u.appendChild(b),u.appendChild(p),u.appendChild(h),h.appendChild(g)})),contactBtn.addEventListener("click",(function(){r(),content.appendChild(C),C.appendChild(E),C.appendChild(v),v.appendChild(T),z.appendChild(L),z.appendChild(A),v.appendChild(z),T.appendChild(f),T.appendChild(M),v.appendChild(y),y.appendChild(H),y.appendChild(B)}))})();