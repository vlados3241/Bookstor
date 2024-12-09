// const images = document.querySelectorAll('.slider-img');
// const controlls = document.querySelectorAll('.controlls');
// let imageIndex = 0;

// function show(index) {
//     images[imageIndex].classList.remove('active');
//     images[index].classList.add('active');
//     imageIndex = index;
// }

// controlls.forEach((e) => {
//     e.addEventListener('click', () => {
//         if (event.target.classList.contains('prev')) {
//             let index = imageIndex - 1;

//             if (index < 0) {
//                 index = images.length - 1;
//             }

//             show(index);
//         } else if (event.target.classList.contains('next')) {
//             let index = imageIndex + 1;
//             if (index >= images.length) {
//                 index = 0;
//             }
//             show(index);
//         }
//     })
// })

// show(imageIndex);


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
