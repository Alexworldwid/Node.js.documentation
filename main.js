let currentSection = 0;
const sections = document.querySelectorAll('.main-section');
const totalSections = sections.length;

function showCurrentSection() {
    sections.forEach((section, index) => {
        section.style.display = index === currentSection ? 'block' : 'none';
    });
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        showCurrentSection();
    }
}

function nextSection() {
    if (currentSection < totalSections - 1) {
        currentSection++;
        showCurrentSection();
    }
}

const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');

prevButton.addEventListener('click', previousSection);
nextButton.addEventListener('click', nextSection);

// Navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            const targetIndex = Array.from(sections).indexOf(targetSection);
            currentSection = targetIndex;
            showCurrentSection();
        }
    });
});

// Show the initial section
showCurrentSection();