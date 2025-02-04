document.getElementById('hamburger').addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    document.getElementById('navbar').classList.toggle('active');
});

// Close the navbar when clicking outside of it
document.addEventListener('click', (event) => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    
    // Check if the click was outside the navbar and hamburger icon
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

// Prevent clicks inside the navbar from closing it
document.getElementById('navbar').addEventListener('click', (event) => {
    event.stopPropagation();
});
