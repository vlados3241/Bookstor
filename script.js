let offset = 0; 
const sliderLine = document.querySelector('.slider-line');
const sliderPageMarker = document.querySelector('.slider-page-marker');
const images = sliderPageMarker.querySelectorAll('img');
console.log(images)

document.querySelector('.arrow-next').addEventListener('click', () => {
    offset += 750;
    if (offset > 2250) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'; 

    if (offset === 750) {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
    } else if (offset === 1500) {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
    } else if (offset === 2250) {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
    } else {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
    }
});

document.querySelector('.arrow-prev').addEventListener('click', () => {
    offset -= 750;
    if (offset < 0) {
        offset = 2250;
    }
    sliderLine.style.left = -offset + 'px'; 

    if (offset === 750) {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
    } else if (offset === 1500) {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
    } else if (offset === 2250) {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
    } else {
        images[0].src = 'Images/SVG/SVG-main-slider/SVG-slieder-page-marker-focus.svg';
        images[1].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[2].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
        images[3].src = 'Images/SVG/SVG-main-slider/SVG-slider-page-marker-unfocus.svg';
    }
});
