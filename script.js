// FAQ Accordian
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of groupBody
        groupBody.classList.toggle('open');

        // Close other open groupBody(ies)
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherGroupIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherGroupIcon.classList.remove('fa-minus');
                otherGroupIcon.classList.add('fa-plus');
            };
        });
    });
});


// Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');

    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});


// <!-- /* --- About me JS code ---*/ -->

const currYearText = document.querySelector('.about-me-currYear');
const currYear = new Date().getFullYear();

currYearText.textContent = currYear;


// pre-loader

const preloader = document.querySelector('#preloader');
const app = document.querySelector('#app');

app.style.display = 'none';
document.body.style.backgroundColor = '#000';

setTimeout(() => {
    preloader.style.display = 'none';
    app.style.display = 'block';
    document.body.style.backgroundColor = '#fff';
}, 1500);