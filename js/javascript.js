const menubar =document.getElementById('menubar');
console.log(menubar);

const navlinks =document.getElementById('nav-links');

menubar.addEventListener('click',()=> {
    navlinks.classList.toggle('show');
    if (navlinks.classList.contains('show')) {
        menubar.src = "img/close.svg" ;
    } else {
        menubar.src = "img/menu.svg"
    }
})