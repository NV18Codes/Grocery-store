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

    // Carousel Functionality
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselContainer = document.getElementById('carousel-container');

    let scrollPosition = 0;
    const cardWidth = 220; // Width of a card (including margin)
    const scrollStep = cardWidth * 2; // Scroll 2 cards at a time

    const updateCarouselButtons = () => {
        const maxScroll = carouselContainer.scrollWidth - carouselContainer.offsetWidth;
        carouselPrev.classList.toggle('hidden', scrollPosition <= 0);
        carouselNext.classList.toggle('hidden', scrollPosition >= maxScroll);
    };

    carouselPrev.addEventListener('click', () => {
        scrollPosition -= scrollStep;
        if (scrollPosition < 0) scrollPosition = 0;
        carouselContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
        updateCarouselButtons();
    });

    carouselNext.addEventListener('click', () => {
        const maxScroll = carouselContainer.scrollWidth - carouselContainer.offsetWidth;
        scrollPosition += scrollStep;
        if (scrollPosition > maxScroll) scrollPosition = maxScroll;
        carouselContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
        updateCarouselButtons();
    });

    updateCarouselButtons();

    // Product Counter Functionality
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
