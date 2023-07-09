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
  if (event.target.nodeName !== "IMG") return;
  event.preventDefault();

  const instance = basicLightbox.create(
    `
	<img width="1400" height="900" src="${event.target.dataset.source}">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
