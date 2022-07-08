import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
}

const galleryCardsArr = galleryItems.map(el => {
        return makeGalleryCard(el);
    });

galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsArr.join(''));

// 2) частина

galleryListEl.addEventListener('click', event => {
    event.preventDefault(); //знімає базові налаштування відкриття посилання 

    const targetDiv = event.target;
    if(targetDiv.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img class="instance__image" src="${targetDiv.dataset.source}" width = "800" height = "600">
    `)
    instance.show()

    
    document.addEventListener('keydown', onEscClick); 
    function onEscClick (event) {
        if (event.code !== 'Escape') {
            return;
        } 
        instance.close();
        document.removeEventListener('keydown', onEscClick);
        };
});



console.log(galleryItems);

