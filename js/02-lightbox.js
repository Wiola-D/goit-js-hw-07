import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
  const galleryItem = document.createElement("li");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__item");
  galleryLink.href = item.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = item.preview;
  galleryImg.alt = item.description;

  galleryLink.append(galleryImg);
  galleryItem.append(galleryLink);
  gallery.append(galleryItem);
}

var lightbox = new SimpleLightbox(".gallery a", {});
