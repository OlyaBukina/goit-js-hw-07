import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItem = galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img
              class="gallery__image "
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
              </a>`;
    })
    .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryItem);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
// gallery.on("shown.simplelightbox");
