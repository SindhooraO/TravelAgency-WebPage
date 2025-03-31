document.addEventListener("DOMContentLoaded", function () {
    const destinationsContainer = document.querySelector(".destinations");
    const prevButton = document.querySelector(".arrow1");
    const nextButton = document.querySelector(".arrow2");

    // Adjust the scroll amount based on the width of a card
    const scrollAmount = 300;

    prevButton.addEventListener("click", function () {
        destinationsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", function () {
        destinationsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});
