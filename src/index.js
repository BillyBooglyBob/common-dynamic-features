import './css/drop_down_menu.css';
import './css/image_slider.css';
import './css/me.css';


// drop down menu
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        toggleButton.addEventListener('mouseenter', function () {
            dropdownContent.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function () {
            dropdownContent.style.display = 'none';
        });
    });
});

// image slider
document.addEventListener('DOMContentLoaded', function () {
    // array of all the images
    // counter for which image it is
    // function with the button, so it add or subtract from the counter
    // if it exceeds 4, go back to 0
    // if it goes below 0, go to 4

    // select image from the array using the counter and change the image
    // plus the relevant icon with the number
    const imageSliderContainer = document.getElementById('image-slider-container-1');
    const imageSlider = imageSliderContainer.querySelector('.image-slider');
    const forwardButton = imageSlider.querySelector('.image-slider-forward');
    const backwardButton = imageSlider.querySelector('.image-slider-backward');
    const navigationCircles = imageSliderContainer.querySelector('.image-slider-navigation-circles');
    

    const images = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg',
    './images/img4.jpg', './images/img5.png'];
    let currentImage = 0;

    // change 1 for forward
    // change -1 for backward

    /* change the current image
        1 for forward
       -1 for backward
     */
    function changeSlide(change) {
        currentImage += change;

        if (currentImage === 5) {
            currentImage = 0;
        } else if (currentImage === -1) {
            currentImage = 4;
        }
        redraw();
    }

    function showSlide() {
        imageSlider.style.backgroundImage = `url('${images[currentImage]}')`;
    }


    function createCircle(index) {
        const newCircle = document.createElement('div');

        if (index === currentImage) {
            newCircle.className = 'image-slider-navigation-selected';
        } else {
            newCircle.className = 'image-slider-navigation-circle';
        }
        
        navigationCircles.appendChild(newCircle);  
    }

    // add navigation circles based on number of images
    // colour navigation circle if it is selected
    function updateNavigationCircles() {
        // clear existing circles
        navigationCircles.innerHTML = '';

        for (let i = 0; i < images.length; i++) {
            createCircle(i);
        }
    }

    function redraw() {
        showSlide();
        updateNavigationCircles();
    }

    redraw();
    forwardButton.addEventListener("click", () => changeSlide(1));
    backwardButton.addEventListener("click", () => changeSlide(-1));
    
});



