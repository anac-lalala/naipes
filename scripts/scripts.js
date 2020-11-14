let navToggle = document.querySelector(".js-principal-nav__toggle");
let navDropdown = document.querySelector(".js-principal-nav__dropdown");

window.matchMedia("(max-width:767px)").matches
  ? navDropdown.classList.add("hidden")
  : navDropdown.classList.remove("hidden");

function toggleNav() {
  navDropdown.classList.toggle("hidden");
}

// Using requestAnimationFrame
(function () {
  let nav = document.querySelector(".principal-nav");
  let heroContent = document.querySelector(".hero__content");
  let typesArticle = document.querySelector("#types");
  let typeScroll = document.querySelectorAll(".types__type");
  let navHeight = nav.scrollHeight;

  typeScroll.forEach(
    (item) => (item.style.animationDelay = `${Math.random() * 0.5 +0.4}s`)
  )
  function inViewPort(el) {
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    );
  }

  function moveHeader() {
    let navTypesRelation = typesArticle.getBoundingClientRect().top - navHeight;
    let top = window.pageYOffset;

    navTypesRelation < 0
      ? nav.classList.add("in-body")
      : nav.classList.remove("in-body");

    heroContent.style.transform = `translateY(${top / 0.95}px)`;
    heroContent.style.opacity = 1 - Math.max(top / (window.innerHeight * 0.6));

    typeScroll.forEach((item) =>
      inViewPort(item)
        ? item.classList.add("appear")
        : item.classList.remove("appear")
    );

    window.requestAnimationFrame(moveHeader);
  }

  window.requestAnimationFrame(moveHeader);
})();
