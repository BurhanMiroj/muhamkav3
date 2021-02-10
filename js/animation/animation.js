const navToggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
navToggler.addEventListener("click", function () {
  const childNavToggler = document.querySelector(".navbar-toggler i");
  const navbar = document.querySelector(".navbar-collapse");
  const closeLayer = document.querySelector("#close-layer");
  const navItem = document.querySelectorAll(".navbar-nav .nav-item:not(.dropdown)");
  navItem.forEach((item) => {
    item.addEventListener("click", function () {
      navbar.classList.remove("navbar-active");
      closeLayer.classList.remove("active");
      childNavToggler.classList.replace("fa-times", "fa-bars");
    });
  });
  if (navbar.classList.contains("navbar-active")) {
    childNavToggler.classList.replace("fa-times", "fa-bars");
  } else {
    childNavToggler.classList.replace("fa-bars", "fa-times");
  }
  navbar.classList.toggle("navbar-active");
  closeLayer.classList.toggle("active");

  closeLayer.addEventListener("click", function () {
    closeLayer.classList.remove("active");
    navbar.classList.remove("navbar-active");
    childNavToggler.classList.replace("fa-times", "fa-bars");
  });
});
window.addEventListener("scroll", function () {
  const windowScroll = this.pageYOffset;
  const btnTop = document.querySelector(".btn-top");
  if (windowScroll > navbar.clientHeight) {
    navbar.classList.add("nav-onscroll");
  } else {
    navbar.classList.remove("nav-onscroll");
  }
  if (windowScroll > 400) {
    btnTop.classList.add("show")
  } else {
    btnTop.classList.remove("show")
  }
});

