const menuHamburger = document.querySelector('.menu-hamburger');
menuHamburger.addEventListener('Click', () =>{
    toggleMenu();
});

function toggleMunu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburger.classLIst.toggle('change');

    if (menuHamburger.classLIst.contains('change')){
        nav.style.display = 'block';
    } else{
        nav.style.display = 'none';
    }
}