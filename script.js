function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector("#hamburger-icon");
    const header = document.querySelector("#header");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    header.classList.toggle("open");
}

document.getElementById('hamburger-icon').onclick = function() {
    toggleMenu();
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var spans = document.querySelectorAll("#hamburger-icon span");
  var isHeaderAlt = document.querySelectorAll("#alt-header").length > 0;

  if ((document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) && !isHeaderAlt) {
    document.getElementById("header").style.backgroundColor = "white";
    spans.forEach(function(span) {
        span.style.backgroundColor = "black";
    });
  } else if (!isHeaderAlt) {
    document.getElementById("header").style.backgroundColor = "transparent";
    spans.forEach(function(span) {
        span.style.backgroundColor = "white";
    });
}
}