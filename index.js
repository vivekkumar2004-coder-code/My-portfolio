let cursor = document.querySelector(".cursor");
let main = document.querySelector("#main-body");

main.addEventListener("mousemove", function (e) {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});


let navbar = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
  let currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    // Scrolling up
    navbar.classList.remove('hidden');
  } else {
    // Scrolling down
    navbar.classList.add('hidden');
  }

  lastScrollY = currentScrollY;
});
