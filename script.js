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
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
// Use jQuery for the carousel container
const $carouselContainer = $('#carousel-container');

// Initialize Owl Carousel
$carouselContainer.owlCarousel({
    loop: false, // Enables infinite looping
    margin: 5, // Gap between items
    nav: false, // Disable default navigation
    dots: false, // Disable dots
    touchDrag: true, // Enable touch dragging
    mouseDrag: true, // Enable mouse dragging
    responsive: {
        0: {
            items: 1, // Show 1 item for small screens
        },
        600: {
            items: 3, // Show 2 items for medium screens
        },
        1000: {
            items: 5, // Show 4 items for large screens
        },
    },
});

// Add event listeners for custom next and previous buttons
carouselPrev.addEventListener('click', () => {
    $carouselContainer.trigger('prev.owl.carousel'); // Go to the previous item
});

carouselNext.addEventListener('click', () => {
    $carouselContainer.trigger('next.owl.carousel'); // Go to the next item
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

});



//Vegetables Carousel Functionality
const vegCarouselPrev = document.getElementById('carousel-prev-veg');
const vegCarouselNext = document.getElementById('carousel-next-veg');
// Use jQuery for the carousel container
const $vegCarouselContainer = $('#veg-carousel-container');

// Initialize Owl Carousel
$vegCarouselContainer.owlCarousel({
    loop: false, // Enables infinite looping
    margin: 5, // Gap between items
    nav: false, // Disable default navigation
    dots: false, // Disable dots
    touchDrag: true, // Enable touch dragging
    mouseDrag: true, // Enable mouse dragging
    responsive: {
        0: {
            items: 1, // Show 1 item for small screens
        },
        600: {
            items: 3, // Show 2 items for medium screens
        },
        1000: {
            items: 5, // Show 4 items for large screens
        },
    },
});

// Add event listeners for custom next and previous buttons
vegCarouselPrev.addEventListener('click', () => {
    $vegCarouselContainer.trigger('prev.owl.carousel'); // Go to the previous item
});

vegCarouselNext.addEventListener('click', () => {
    $vegCarouselContainer.trigger('next.owl.carousel'); // Go to the next item
});





// Fruits Carousel Functionality
const fruitsCarouselPrev = document.getElementById('fruits-carousel-prev');
const fruitsCarouselNext = document.getElementById('fruits-carousel-next');
// Use jQuery for the carousel container
const $fruitsCarouselContainer = $('#fruits-carousel-container');

// Initialize Owl Carousel
$fruitsCarouselContainer.owlCarousel({
    loop: false, // Enables infinite looping
    margin: 5, // Gap between items
    nav: false, // Disable default navigation
    dots: false, // Disable dots
    touchDrag: true, // Enable touch dragging
    mouseDrag: true, // Enable mouse dragging
    responsive: {
        0: {
            items: 1, // Show 1 item for small screens
        },
        600: {
            items: 3, // Show 2 items for medium screens
        },
        1000: {
            items: 5, // Show 4 items for large screens
        },
    },
});

// Add event listeners for custom next and previous buttons
fruitsCarouselPrev.addEventListener('click', () => {
    $fruitsCarouselContainer.trigger('prev.owl.carousel'); // Go to the previous item
});

fruitsCarouselNext.addEventListener('click', () => {
    $fruitsCarouselContainer.trigger('next.owl.carousel'); // Go to the next item
});



// Carousel Functionality for Dairy & Poultry Section
const dairyCarouselPrev = document.getElementById('dairy-carousel-prev');
const dairyCarouselNext = document.getElementById('dairy-carousel-next');
// Use jQuery for the carousel container
const $dairyCarouselContainer = $('#dairy-carousel-container');

// Initialize Owl Carousel
$dairyCarouselContainer.owlCarousel({
    loop: false, // Enables infinite looping
    margin: 5, // Gap between items
    nav: false, // Disable default navigation
    dots: false, // Disable dots
    touchDrag: true, // Enable touch dragging
    mouseDrag: true, // Enable mouse dragging
    responsive: {
        0: {
            items: 1, // Show 1 item for small screens
        },
        600: {
            items: 3, // Show 2 items for medium screens
        },
        1000: {
            items: 5, // Show 4 items for large screens
        },
    },
});

// Add event listeners for custom next and previous buttons
dairyCarouselPrev.addEventListener('click', () => {
    $dairyCarouselContainer.trigger('prev.owl.carousel'); // Go to the previous item
});

dairyCarouselNext.addEventListener('click', () => {
    $dairyCarouselContainer.trigger('next.owl.carousel'); // Go to the next item
});



