console.log("Success ready JS!!");

var lightbox = new PhotoSwipeLightbox({
  gallery: "#main-gallery",
  children: "a",
  pswpModule: PhotoSwipe,
});
lightbox.init();

/* AOS.js */
AOS.init();
