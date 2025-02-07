document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    const productSections = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        let found = false;

        productSections.forEach(section => {
            const title = section.querySelector('h4').textContent.toLowerCase();
            if (title.includes(query)) {
                section.style.display = 'block';
                found = true;
            } else {
                section.style.display = 'none';
            }
        });

        noResults.style.display = found ? 'none' : 'block';
    });
});



// Location Access
const locationText = document.getElementById('location-text');
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationText.textContent = `Current Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
        },
        () => {
            locationText.textContent = 'Location access denied';
        }
    );
} else {
    locationText.textContent = 'Geolocation not supported';
}




//Flash deals Carousel Functionality
$(document).ready(function () {
    $(".carousel-container").each(function (index, element) {
        var $carousel = $(element); // Get the current carousel

        // Initialize Owl Carousel for each carousel container
        $carousel.owlCarousel({
            loop: false, // Set to true for infinite scrolling
            margin: 10,
            nav: false, // Disable default navigation
            dots: false, // Disable dots
            touchDrag: true, // Enable touch dragging
            mouseDrag: true, // Enable mouse dragging
            responsive: {
                0: { items: 1 },      // Mobile (1 item)
                480: { items: 2 },    // Small tablets (2 items)
                768: { items: 3 },    // Tablets (3 items)
                1024: { items: 4 },   // Laptops (4 items)
                1280: { items: 5 },   // 14-inch screens (5 items)
                1440: { items: 6 },   // 15.6-inch screens and larger (6 items)
            },
        });

        // Attach event listeners for buttons within the same section
        $(this).closest(".carousel-section").find(".carousel-prev").click(function () {
            $carousel.trigger("prev.owl.carousel");
        });

        $(this).closest(".carousel-section").find(".carousel-next").click(function () {
            $carousel.trigger("next.owl.carousel");
        });
    });
});









// Product Card Add button Functionality
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
    const addButton = card.querySelector('.addButton');
    const counterSection = card.querySelector('.counterSection');
    const counter = card.querySelector('.counter');
    const decreaseButton = card.querySelector('.decrease');
    const increaseButton = card.querySelector('.increase');

    let count = 1; // Default counter value

    // Show counter and hide "ADD" button
    addButton.addEventListener('click', () => {
        addButton.classList.add('hidden');
        counterSection.classList.remove('hidden');
        count = 1; // Reset count to 1 when ADD is clicked
        counter.textContent = count;
    });

    // Decrease counter or revert to "ADD" button
    decreaseButton.addEventListener('click', () => {
        if (count > 1) {
            count--;
            counter.textContent = count;
        } else {
            counterSection.classList.add('hidden');
            addButton.classList.remove('hidden');
        }
    });

    // Increase counter
    increaseButton.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });
});






