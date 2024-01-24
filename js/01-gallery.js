import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = item.preview;
  galleryImg.dataset.source = item.original;
  galleryImg.alt = item.description;

  galleryLink.append(galleryImg);
  galleryItem.append(galleryLink);
  gallery.append(galleryItem);
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  lightbox.show();
});
