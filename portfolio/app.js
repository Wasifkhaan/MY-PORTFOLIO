document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        "DEVELOPER",
        "DESIGNER",
        "YOUTUBER"
    ];

    let speed = 100;
    const textElements = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let characterIndex = 0;

    // Typewriter Effect
    function typeWriter() {
        if (characterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000); // Pause before erasing
        }
    }

    // Erase text function
    function eraseText() {
        if (textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length; // Move to next text
            characterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    // Start typewriter on load
    typeWriter();

    // Hamburger menu logic
    const navbar = document.querySelector(".dropdown");
    const hamburgIcon = document.querySelector('.fa-bars');
    const cancelIcon = document.querySelector('.fa-xmark');

    hamburgIcon.addEventListener('click', () => {
        navbar.style.transform = "translateY(0px)";
        navbar.classList.add("open");
        hamburgIcon.style.display = 'none'; // Hide hamburger icon
        cancelIcon.style.display = 'block'; // Show cancel icon
    });

    cancelIcon.addEventListener('click', () => {
        navbar.style.transform = "translateY(-500px)";
        navbar.classList.remove("open");
        hamburgIcon.style.display = 'block'; // Show hamburger icon
        cancelIcon.style.display = 'none'; // Hide cancel icon
    });
});
