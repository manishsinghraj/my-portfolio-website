


// const carousel = document.querySelector(".project-card-container");
// const arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false;
// let isDragging = false;
// let prevPageX;
// let prevScrollLeft;
// let positionDiff;

// const showHideIcons = () => {
//     // Show and hide prev/next icons based on the carousel's scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
//     arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
// };

// const slideTo = (position) => {
//     carousel.scrollTo({
//         left: position,
//         behavior: "smooth"
//     });
// };

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = carousel.querySelector(".project-details-container").clientWidth + 14;
//         carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
//         setTimeout(() => showHideIcons(), 60);
//     });
// });

// const autoSlide = () => {
//     if (carousel.scrollLeft <= 0) return;

//     positionDiff = Math.abs(positionDiff);
//     let firstImgWidth = carousel.querySelector(".project-details-container").clientWidth + 14;
//     let valDifference = firstImgWidth - positionDiff;

//     if (carousel.scrollLeft > prevScrollLeft) {
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }

//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// };

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//     if (!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// };

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");

//     if (!isDragging) return;
//     isDragging = false;
//     autoSlide();
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);


//Project slider

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}


// JavaScript to dynamically adjust item dimensions
window.addEventListener('load', function () {
    const containers = document.querySelectorAll('.threeD-image-box');

    containers.forEach((container) => {
        const content = container.querySelector('img, video');
        if (content) {
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            const contentWidth = content.width;
            const contentHeight = content.height;

            if (contentWidth / contentHeight > containerWidth / containerHeight) {
                content.style.width = '100%';
                content.style.height = 'auto';
            } else {
                content.style.width = 'auto';
                content.style.height = '100%';
            }
        }
    });
});




