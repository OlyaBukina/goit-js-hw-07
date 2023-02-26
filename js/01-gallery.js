import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

function openModal(url) {
    let instance;
    function onEscKeydown(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    }

    instance = basicLightbox.create(
        `<img width="1400" height="900" src="${url}"/>`,
        {
            onShow: () => {
                window.addEventListener("keydown", onEscKeydown);
            },
            onClose: () => {
                window.removeEventListener("keydown", onEscKeydown);
            },
        }
    );
    instance.show();
}

function onImageClick(e) {
    e.preventDefault();
    const imageEl = e.target;

    if (imageEl.nodeName !== "IMG") {
        return;
    }

    openModal(imageEl.dataset.source);
}

galleryEl.addEventListener("click", onImageClick);
