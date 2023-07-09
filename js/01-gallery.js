import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");

const newGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryListEl.insertAdjacentHTML("beforeend", newGalleryMarkup);

galleryListEl.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;
  console.log(event);
}
