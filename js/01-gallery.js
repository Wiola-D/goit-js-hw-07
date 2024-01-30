import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems
  .map(
    (item) =>
      `<li class = "gallery__item"><a class = "gallery__link" href="${item.original}"><img class = "gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`
  )
  .join("");

gallery.innerHTML = galleryImages;

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  lightbox.show();
});

/*
lightbox.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    lightbox.close();
  }
});
*/
