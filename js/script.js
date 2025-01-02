// Function to initialize the slide-in animation
function initSlideInAnimation() {
    // Select the content wrapper and resume intro elements
    const contentWrapper = document.querySelector('.content-wrapper');
    const resumeIntro = document.querySelector('.resume-intro');
    
    // Trigger the animation after a slight delay
    setTimeout(() => {
        contentWrapper.style.top = '0'; // Move to the correct position
        contentWrapper.style.opacity = '1'; // Make it fully visible
        resumeIntro.style.top = '0'; // Move resume intro to its position
        resumeIntro.style.opacity = '1'; // Make resume intro fully visible
    }, 300); // Delay of 300ms for smoother experience
}

// Call the animation function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSlideInAnimation);
