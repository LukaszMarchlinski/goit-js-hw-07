import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

//tworzenie galerii obrazków
const allItems = galleryItems.map((galleryItem) => {
    const item = `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}" />
        </a>
        </div>`;
    return item; 
})
    .join('');


//dodano galerie obrazków
// gallery.innerHTML = allItems;
gallery.insertAdjacentHTML("beforeend", allItems);


gallery.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    } 

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" />`);
    instance.show();
    
    gallery.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            instance.close();
        }
    });
})