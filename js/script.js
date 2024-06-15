// menambahkan class active di navbar
const NavbarList = document.querySelector
    ('.Navbar-list');

document.querySelector('#hamburger-menu').
onclick = () => {
    NavbarList.classList.toggle('active');
    };

    // untuk menhilangkan nav ketika klik di luar sidebar
const hamburger = document.querySelector
    ('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !NavbarList.contains(e.target)) {
        NavbarList.classList.remove('active');
    }
});