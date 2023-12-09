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
    const images = document.querySelectorAll('.image');

    images.forEach(function (image) {
        image.style.display = 'none';


        // const toggleButton = dropdown.querySelector('.dropdown-toggle');
        // const dropdownContent = dropdown.querySelector('.dropdown-content');

        // toggleButton.addEventListener('mouseenter', function () {
        //     dropdownContent.style.display = 'block';
        // });

        // dropdown.addEventListener('mouseleave', function () {
        //     dropdownContent.style.display = 'none';
        // });
    });
});



