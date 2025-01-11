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






    //Flash Carousel Functionality
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselContainer = document.getElementById('carousel-container');

    let scrollPosition = 0;
    const cardWidth = 220; // Width of a card (including margin)
    const scrollStep = cardWidth * 1; // Scroll 2 cards at a time

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



    // Product Card Add Button Functionality
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



    // Vegetables Carousel Functionality
    const carouselPrevVeg = document.getElementById('carousel-prev-veg');
    const carouselNextVeg = document.getElementById('carousel-next-veg');
    const carouselContainerVeg = document.getElementById('carousel-container-veg');

    let vegScrollPosition = 0;
    const vegCardWidth = 220; // Approximate width of a card (including margin)
    const vegScrollStep = vegCardWidth * 1; // Scroll 1 cards at a time

    const updateVegCarouselButtons = () => {
        const maxScroll = carouselContainerVeg.scrollWidth - carouselContainerVeg.offsetWidth;
        carouselPrevVeg.classList.toggle('hidden', vegScrollPosition <= 0);
        carouselNextVeg.classList.toggle('hidden', vegScrollPosition >= maxScroll);
    };

    carouselPrevVeg.addEventListener('click', () => {
        vegScrollPosition -= vegScrollStep;
        if (vegScrollPosition < 0) vegScrollPosition = 0;
        carouselContainerVeg.scrollTo({
            left: vegScrollPosition,
            behavior: 'smooth',
        });
        updateVegCarouselButtons();
    });

    carouselNextVeg.addEventListener('click', () => {
        const maxScroll = carouselContainerVeg.scrollWidth - carouselContainerVeg.offsetWidth;
        vegScrollPosition += vegScrollStep;
        if (vegScrollPosition > maxScroll) vegScrollPosition = maxScroll;
        carouselContainerVeg.scrollTo({
            left: vegScrollPosition,
            behavior: 'smooth',
        });
        updateVegCarouselButtons();
    });

    updateVegCarouselButtons();

    


// Fruits Carousel Functionality
const fruitsCarouselPrev = document.getElementById('fruits-carousel-prev');
const fruitsCarouselNext = document.getElementById('fruits-carousel-next');
const fruitsCarouselContainer = document.getElementById('fruits-carousel-container');

let fruitsScrollPosition = 0;
const fruitsCardWidth = 220; // Width of a card (including margin)
const fruitsScrollStep = fruitsCardWidth * 1; // Scroll 2 cards at a time

const updateFruitsCarouselButtons = () => {
    const maxScroll = fruitsCarouselContainer.scrollWidth - fruitsCarouselContainer.offsetWidth;
    fruitsCarouselPrev.classList.toggle('hidden', fruitsScrollPosition <= 0);
    fruitsCarouselNext.classList.toggle('hidden', fruitsScrollPosition >= maxScroll);
};

fruitsCarouselPrev.addEventListener('click', () => {
    fruitsScrollPosition -= fruitsScrollStep;
    if (fruitsScrollPosition < 0) fruitsScrollPosition = 0;
    fruitsCarouselContainer.scrollTo({
        left: fruitsScrollPosition,
        behavior: 'smooth',
    });
    updateFruitsCarouselButtons();
});

fruitsCarouselNext.addEventListener('click', () => {
    const maxScroll = fruitsCarouselContainer.scrollWidth - fruitsCarouselContainer.offsetWidth;
    fruitsScrollPosition += fruitsScrollStep;
    if (fruitsScrollPosition > maxScroll) fruitsScrollPosition = maxScroll;
    fruitsCarouselContainer.scrollTo({
        left: fruitsScrollPosition,
        behavior: 'smooth',
    });
    updateFruitsCarouselButtons();
});

updateFruitsCarouselButtons();





//Dairy & Poultry Carousel Functionality 
const dairyCarouselPrev = document.querySelector('#dairy-poultry .carousel-prev');
const dairyCarouselNext = document.querySelector('#dairy-poultry .carousel-next');
const dairyCarouselContainer = document.querySelector('#dairy-poultry .carousel-container');

let dairyScrollPosition = 0;
const dairyCardWidth = 220; // Width of a card (including gap)
const dairyScrollStep = dairyCardWidth * 1; // Scroll 2 cards at a time

const updateDairyCarouselButtons = () => {
    const maxScroll = dairyCarouselContainer.scrollWidth - dairyCarouselContainer.offsetWidth;
    dairyCarouselPrev.classList.toggle('hidden', dairyScrollPosition <= 0);
    dairyCarouselNext.classList.toggle('hidden', dairyScrollPosition >= maxScroll);
};

dairyCarouselPrev.addEventListener('click', () => {
    dairyScrollPosition -= dairyScrollStep;
    if (dairyScrollPosition < 0) dairyScrollPosition = 0;
    dairyCarouselContainer.style.transform = `translateX(-${dairyScrollPosition}px)`;
    updateDairyCarouselButtons();
});

dairyCarouselNext.addEventListener('click', () => {
    const maxScroll = dairyCarouselContainer.scrollWidth - dairyCarouselContainer.offsetWidth;
    dairyScrollPosition += dairyScrollStep;
    if (dairyScrollPosition > maxScroll) dairyScrollPosition = maxScroll;
    dairyCarouselContainer.style.transform = `translateX(-${dairyScrollPosition}px)`;
    updateDairyCarouselButtons();
});

updateDairyCarouselButtons();



