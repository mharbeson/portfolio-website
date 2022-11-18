
// Hamburger functionality
const primaryNav = document.querySelector('.primary-navigation');
const toggleButton = document.querySelector('.menu-toggle');

toggleButton.addEventListener('click', function () {
    const visbility = primaryNav.getAttribute('data-visible')

    const aria = toggleButton.getAttribute('aria-expanded');

    console.log(aria);
    if (visbility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        toggleButton.setAttribute('aria-expanded', true);
    }
    else if (visbility === 'true') {
        primaryNav.setAttribute('data-visible', false);
        toggleButton.setAttribute('aria-expanded', false);
    }
});

// Stop animations during window resize
let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});