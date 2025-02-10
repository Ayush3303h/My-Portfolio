document.getElementById('hamburger').addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    document.getElementById('navbar').classList.toggle('active');
});


document.addEventListener('click', (event) => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('active');
    }
});


document.getElementById('navbar').addEventListener('click', (event) => {
    event.stopPropagation();
});
