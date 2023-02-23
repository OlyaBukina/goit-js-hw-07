import { galleryItems } from "./gallery-items.js";
// Change code below this line

//1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const galleryEl = document.querySelector(".gallery");

const galleryItem = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item image">
          <a class="gallery__link" href="${original}">
            <img
            loading="lazy"
              class="gallery__image "
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryItem);

// 2.Реализация делегирования на div.gallery и получение url большого изображения.

galleryEl.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();
    const imageEl = e.target;

    if (imageEl.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
        `<img width="1400" height="900" src="${imageEl.dataset.source}">`
    );
    instance.show();

    closeModalOnKeypress(e, instance);
}
function closeModalOnKeypress(e, instance) {
    window.addEventListener("keydown", (e) => {
        if (e.code !== "Escape") {
            return;
        }
        instance.close();
    });
}
