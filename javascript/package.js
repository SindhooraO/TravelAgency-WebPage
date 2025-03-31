document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("packageModal");
    const closeModal = document.querySelector(".close");
    
    const packages = [
        {
            title: "Tirupati Pilgrimage Package, Andhra Pradesh",
            duration:" 2 Days / 1 Night",
            price: "₹7,500 per person",
            details: "Hotel stay, VIP darshan pass, transport.",
            image: "Images/tirupati.png",
            includes: " Tirumala Temple, Kapila Theertham, Sri Venkateswara National Park",
        },
        {
            title: "Munnar Hills Retreat, Kerala",
            duration:"3 Days/ 2 Nights",
            price: "₹12,000 per person",
            details: "Tea gardens, waterfalls, and Eravikulam National Park.",
            image: "Images/munnar.png",
            includes: " Stay in a 3-star resort, breakfast, sightseeing, and transport",

        },
        {
            title: "Ooty & Coonoor Getaway, Tamil Nadu ",
            duration:"4 Days / 3 Nights",
            price: "₹15,500 per person",
            details: "Botanical gardens, Nilgiri Mountain Railway, and lush hills.",
            image: "Images/ooty.png",
            includes:"Stay in a 4-star hotel, breakfast, sightseeing, and Nilgiri train ride"
        },
        {
            title: "Pondicherry French Heritage Tour",
            duration:"3 Days / 2 Nights",
            price: "₹13,500 per person",
            details: "Auroville, Promenade Beach, Paradise Beach.",
            image: "Images/pondicherry.png",
            includes:"Cycling tour, French café hopping"

        },
        {
            title: "Kerala Beach Escape (Kovalam & Varkala) ",
            duration:"4 Days / 3 Nights",
            price: "₹16,500 per person",
            details: "Lighthouse Beach, Papanasam Beach, Veli Tourist Village.",
            image: "Images/keralaBeach.png",
            includes:"Beachfront resort stay, breakfast, sightseeing"

        }
    ];

    document.querySelectorAll(".book").forEach((button, index) => {
        button.addEventListener("click", () => {
            // Populate modal content
            document.getElementById("packageTitle").textContent = packages[index].title;
            document.getElementById("packageDuration").textContent = packages[index].duration;
            document.getElementById("packagePrice").textContent = packages[index].price;
            document.getElementById("packageDetails").textContent = packages[index].details;
            document.getElementById("packageImage").src = packages[index].image;
            document.getElementById("packageIncludes").textContent = packages[index].includes;

            
            // Show modal
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
