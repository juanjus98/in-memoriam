// Import all of Bootstrap's JS

console.log("Success ready JS and gallery!!");

var lightbox = new PhotoSwipeLightbox({
    gallery: '#main-gallery',
    children: 'a',
    pswpModule: PhotoSwipe 
  });
  lightbox.init();