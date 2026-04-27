// Simple gallery script
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-item img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert('You clicked on ' + this.alt);
        });
    });
});