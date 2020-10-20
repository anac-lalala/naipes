var navToggle = document.querySelector(".js-principal-nav__toggle");
var navDropdown= document.querySelector(".js-principal-nav__dropdown");

window.matchMedia("(max-width:768px)").matches ? navDropdown.classList.add('hidden'): navDropdown.classList.remove('hidden');

function toggleNav() {
  navDropdown.classList.toggle('hidden');
  console.log("test");
}

