// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
document.querySelector('header').appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, .links, .resume').forEach(element => {
        element.classList.toggle('dark-mode');
    });
});
