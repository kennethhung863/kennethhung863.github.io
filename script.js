document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.getElementById('close');

    // Function to dynamically add images to the gallery
    function loadImages() {
        fetch('/images')
            .then(response => response.json())
            .then(images => {
                gallery.innerHTML = images.map(img => `
                    <img src="/images/${img}" alt="Photo">
                `).join('');
                addClickEvents();
            });
    }

    // Add click events to gallery images
    function addClickEvents() {
        gallery.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src;
                modal.classList.remove('hidden');
            });
        });
    }

    // Close the modal
    close.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Load images on page load
    loadImages();
});
