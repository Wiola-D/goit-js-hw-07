import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems
  .map(
    (item) =>
      `<li><a class = "gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></li>`
  )
  .join("");

gallery.innerHTML = galleryImages;

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay,
});
