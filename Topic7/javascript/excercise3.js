// Array of image sources for the image gallery
let imageSources = [
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    // Add more image sources here
];

// Get the gallery element
let gallery = document.getElementById("gallery");

// Set the initial image source
gallery.src = imageSources[0];

// Function to change the image to the next one
function nextImage() {
    let currentIndex = imageSources.indexOf(gallery.src);
    let nextIndex = (currentIndex + 1) % imageSources.length;
    gallery.src = imageSources[nextIndex];
}

// Function to change the image to the previous one
function prevImage() {
    let currentIndex = imageSources.indexOf(gallery.src);
    let prevIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    gallery.src = imageSources[prevIndex];
}

// Add event listeners to the buttons
document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("prevButton").addEventListener("click", prevImage);
