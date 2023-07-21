function typeWriterEffect() {
    const elements = document.getElementsByClassName('typewriter-effect');
    const typingSpeed = 100; // Adjust the typing speed (in milliseconds)
    const delayBetweenElements = 1000; // Adjust the delay between elements (in milliseconds)

    function type(index) {
        if (index < elements.length) {
            const element = elements[index];
            const text = element.textContent;
             element.textContent = ''; // Clear the element's content

            let i = 0;

            function typeCharacter() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeCharacter, typingSpeed);
                }
            }

            typeCharacter();

            setTimeout(function () {
                type(index + 1); // Move to the next element after the delay
            }, text.length * typingSpeed + delayBetweenElements);
        }
    }

        type(0); // Start the typewriter effect from the first element
}

// Trigger the typewriter effect when the page loads
window.onload = typeWriterEffect;


// make the image for the project section bubble
const projectImages = document.querySelectorAll(".projectContainer img");

function zoomInImage(image) {
  image.style.transform = "scale(1.2)";
}

function resetImageZoom(image) {
  image.style.transform = "scale(1)";
}

projectImages.forEach((image) => {
  image.addEventListener("mouseover", () => zoomInImage(image));
  image.addEventListener("mouseout", () => resetImageZoom(image));
});