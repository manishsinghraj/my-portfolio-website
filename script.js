//Download Resume
document.getElementById('downloadResumeButton').addEventListener('click', function () {
    var resumeLink = 'https://drive.google.com/drive/u/0/folders/1eX7SdB0DlGHY9CtBZsIjnNNuYM2QeKhs';
    window.open(resumeLink);
});

//Recognition
document.getElementById('recognitionButton').addEventListener('click', function () {
    var resumeLink = 'https://drive.google.com/drive/folders/1c443JLYnAUExaQC3LzjtsLeBikrTkoBq';
    window.open(resumeLink);
});


//Type Effect
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
        strings: ["Developer", "Passionate Coder", "3D Enthusiast"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});


//Total years calculator
document.addEventListener("DOMContentLoaded", function () {
    const totalYearsElements = document.querySelectorAll(".years");

    totalYearsElements.forEach(function (totalYears) {
        const totalMonths = parseInt(totalYears.getAttribute("data-months")) || 0;

        let span = document.createElement("span");
        span.innerHTML = Math.abs(eval(totalYears.textContent)) + " yrs " + totalMonths + " mos ";
        totalYears.appendChild(span);

        span.style.position = "absolute";
        span.style.right = "0";
        span.style.paddingRight = "20px";
    });
});


// dynamically adjust item dimensions for3d gallery
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


