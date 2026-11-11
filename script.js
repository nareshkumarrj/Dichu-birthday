
// ==================================
// 1. RECURRING BIRTHDAY COUNTDOWN
// ==================================

function updateCountdown() {
    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        1, // February
        9,
        0, 0, 0
    );

    // If this year's birthday has passed,
    // calculate the next year's birthday.
    if (now >= birthday) {
        birthday = new Date(
            now.getFullYear() + 1,
            1,
            9,
            0, 0, 0
        );
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    const note = document.getElementById("birthdayNote");

    if (
        now.getMonth() === 1 &&
        now.getDate() === 9
    ) {
        note.textContent = "Happy Birthday, Divya! ♡";
    } else {
        note.textContent =
            "Until another beautiful year of you. ♡";
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ==================================
// 2. OPEN THE PERSONAL LETTER
// ==================================

const openLetterButton =
    document.getElementById("openLetter");

const envelope =
    document.querySelector(".envelope");

const fullLetter =
    document.getElementById("fullLetter");

openLetterButton.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        fullLetter.classList.add("show");

        fullLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        openLetterButton.textContent =
            "Your letter is open ♡";

        openLetterButton.disabled = true;

    }, 800);

});


// ==================================
// 3. FLOATING HEART ANIMATION
// ==================================

const heartsContainer =
    document.getElementById("floatingHearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 16000);
}

setInterval(createHeart, 1200);


// ==================================
// 4. AUTOMATIC COPYRIGHT YEAR
// ==================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==================================
// 5. PREVENT MULTIPLE VIDEOS PLAYING
// ==================================

/* PREVENT MULTIPLE MEDIA PLAYING */

const mediaPlayers = document.querySelectorAll("video, audio");

mediaPlayers.forEach(player => {
    player.addEventListener("play", () => {
        mediaPlayers.forEach(otherPlayer => {
            if (otherPlayer !== player) {
                otherPlayer.pause();
            }
        });
    });
});


/* ==================================
   6. PHOTO FULL VIEW
================================== */

/* PHOTO FULL VIEW */

function setupPhotoLightbox() {

    const gallery = document.querySelector(".photo-gallery");
    const lightbox = document.getElementById("photoLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("closeLightbox");

    if (!gallery || !lightbox || !lightboxImage || !closeButton) {
        console.error("Photo lightbox HTML elements not found!");
        return;
    }

    gallery.addEventListener("click", function(event) {

        const photo = event.target.closest(".photo-card img");

        if (!photo) return;

        lightboxImage.src = photo.src;
        lightbox.classList.add("active");

    });

    closeButton.addEventListener("click", function() {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupPhotoLightbox);
} else {
    setupPhotoLightbox();
}

