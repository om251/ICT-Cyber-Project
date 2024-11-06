// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Self-Assessment Score Calculation
document.getElementById('calculate').addEventListener('click', function() {
    let q1 = parseInt(document.getElementById('q1').value);
    let q2 = parseInt(document.getElementById('q2').value);
    let score = ((10 - q1) + (10 - q2)) * 5; // Simple scoring algorithm
    document.getElementById('score').innerText = score + '%';
});

// Contact Form Submission (just a placeholder)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    this.reset();
});

// Slider value display
document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.slider');
    sliders.forEach(function(slider) {
        var valueDisplay = document.getElementById(slider.id + '-value');
        valueDisplay.textContent = slider.value; // Set initial value
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
        });
    });
});

// Modal Image Gallery
// Get the modal
var modal = document.getElementById("image-modal");
// Get the modal image and caption
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");
// Get all images inside .infographics
var images = document.querySelectorAll('.infographics img');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
// Close the modal when the user clicks outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

