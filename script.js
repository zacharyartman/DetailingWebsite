function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector("#hamburger-icon");
    var hamburgerSpans = document.querySelectorAll("#hamburger-icon span");
    const header = document.querySelector("#header");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    header.classList.toggle("open");

    var isMenuOpen = icon.classList.contains('open');
    hamburgerSpans.forEach(function(span) {
        span.style.backgroundColor = isMenuOpen ? "black" : "white";
    });

}

document.getElementById('hamburger-icon').onclick = function() {
    toggleMenu();
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.getElementById("header");
    var hamburgerSpans = document.querySelectorAll("#hamburger-icon span");
    var isTransparentHeader = document.querySelectorAll("#transparent-header").length > 0;
    var hasScrolled = document.body.scrollTop > 75 || document.documentElement.scrollTop > 75;

    if (isTransparentHeader && hasScrolled) {
        header.classList.add("header-scrolled");
        hamburgerSpans.forEach(function(span) {
            span.style.backgroundColor = "black";
        });
    } else if (hasScrolled) {
        header.classList.add("header-scrolled");
        hamburgerSpans.forEach(function(span) {
            span.style.backgroundColor = "black";
        });

    } else {
        header.classList.remove("header-scrolled");
        if (isTransparentHeader) {
            hamburgerSpans.forEach(function(span) {
                span.style.backgroundColor = "white";
            });
        }
    }
}

document.getElementById('gallery-dropdown').onclick = function() {
    const menu = document.querySelector('.dropdown-items');
    menu.classList.toggle('open');
}