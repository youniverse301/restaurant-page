const contactContainer = document.createElement('div');
contactContainer.setAttribute('id','contactContainer');
const contactTitle = document.createElement('div');
contactTitle.setAttribute('id','contactTitle');
contactTitle.innerHTML = 'Contact Us';
const contactMid = document.createElement('div');
contactMid.setAttribute('id','contactMid');
const contactAddress = document.createElement('div');
contactAddress.setAttribute('id','contactAddress');
const addressTitle= document.createElement('h1');
addressTitle.setAttribute('id','addressTitle');
addressTitle.innerHTML = 'Address:'
const address= document.createElement('h2');
address.setAttribute('id','address');
address.innerHTML = '123 Pizza Lane, Pizza Town';
const contactHours = document.createElement('div');
contactHours.setAttribute('id','contactHours');
const hoursTitle= document.createElement('h1');
hoursTitle.setAttribute('id','hoursTitle');
hoursTitle.innerHTML = 'Hours of Operation:'
const hours= document.createElement('h2');
hours.setAttribute('id','hours');
hours.innerHTML = '<p>Monday-Thursday: 11am-9pm</p> <p>Friday-Saturday: 11am-10pm</p> <p>Sunday: 12pm-8pm</p>';
const contactSocials = document.createElement('div');
contactSocials.setAttribute('id','contactSocials');
const socialsTitle= document.createElement('h1');
socialsTitle.setAttribute('id','socialsTitle');
socialsTitle.innerHTML = 'Stay Connected'
const socials= document.createElement('h2');
socials.setAttribute('id','socials');
socials.innerHTML = '<p>Facebook: @giovannispizza</p> <p>Instagram: @gios.pizza</p> <p>Twitter: @giovannisitalian</p>';


function loadContact() {
    content.appendChild(contactContainer);
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactMid);
    contactMid.appendChild(contactHours);
    contactAddress.appendChild(addressTitle);
    contactAddress.appendChild(address);
    contactMid.appendChild(contactAddress);
    contactHours.appendChild(hoursTitle);
    contactHours.appendChild(hours);
    contactMid.appendChild(contactSocials);
    contactSocials.appendChild(socialsTitle);
    contactSocials.appendChild(socials);
}


export {loadContact};