// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background-color: rgba(255, 255, 255, 0.7);
    //background-color: rgba(0, 155, 90, 1);
    //background-color: rgba(120, 253, 253, 1);
    background-color: rgba(1, 253, 253, 1);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
//svgImage.src = 'https://xvx3-bpuh-nxxl.n7c.xano.io/vault/-WYxXyI8/NxrAmsb-iTmj8wqwfL6NwRPY0rg/ME_VGw../logo_sem_fundo_video.gif';
svgImage.src = 'https://api.yeezipay.com/vault/UvaVRDs_/2y2Cka71mgWLGFqrUTqjxSZ7mEA/EwcoNw../preloading.gif';
svgImage.style.cssText = `
    //max-width: 100%;
    max-width: 400px;
    //max-height: 100%;
    max-height: 400px;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
svgImage.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace the following lines with the actual code that loads your external JS files
    // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
