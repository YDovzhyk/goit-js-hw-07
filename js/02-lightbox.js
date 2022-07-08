import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
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


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
});