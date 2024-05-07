console.log("Success ready JS!!");

var lightbox = new PhotoSwipeLightbox({
  gallery: "#main-gallery",
  children: "a",
  pswpModule: PhotoSwipe,
});
lightbox.init();

/* AOS.js */
AOS.init();

/* Menú */
var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
