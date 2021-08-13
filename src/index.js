const userList = document.querySelector('#users-list');
const resList = document.querySelector('#restaurantList-list');
const rsvpList = document.querySelector('#reservation-list');

let users;
let restaurants;

//Users
const renderU = async()=>{
    const response = await fetch('/api/users');
    users = await response.json();  // we need await here
    generatorU();
}

const generatorU = () => {
    const hash = parseInt(window.location.hash.slice(1));
    const html = users.map(user =>`<li>
    <a href>${user.name}</a>
    ${hash === user.id ? ${rsvpList.filter(rsvp=>rsvp.userId === user.id)} :''} 
    </li>` 
    ).join('');
    userList.innerHTML = html;
};

//Restaurant
const renderR = async()=>{
    const response = await fetch('/api/users');
    users = await response.json();  // we need await here
    generatorR();
}

const generatorR = () => {
    const html = users.map(user =>`<li>
    <a href>${user.name}</a></li>` 
    ).join('');
    userList.innerHTML = html;
};



window.addEventListener('hashchange',renderU)
renderU();
renderR();
