burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('navbar');
})

function newMsg1() {

    return alert("we are comming live soon !");
}

function newMsg2() {

    return alert("Comming soon !");
}