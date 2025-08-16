// document.getElementById("theme-toggle").addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
// });

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typewriter effect
const typewriterEl = document.querySelector('.typewriter');
const text = typewriterEl.textContent;
typewriterEl.textContent = ''; // clear original

let i = 0;

// Create a span for typed text
const textSpan = document.createElement('span');
typewriterEl.appendChild(textSpan);

// Create cursor upfront
const cursor = document.createElement('span');
cursor.classList.add('cursor');
typewriterEl.appendChild(cursor);

function type() {
    if (i < text.length) {
        const char = text[i];
        // preserve spaces
        textSpan.textContent += char === ' ' ? '\u00A0' : char;
        i++;
        setTimeout(type, 100); // typing speed
    }
}

type();


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Auto-close when link clicked (mobile)
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });
});

// Highlight section in viewport
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = navLinks.querySelector(`a[data-section="${id}"]`);
        if (entry.isIntersecting) {
            navItems.forEach(l => l.classList.remove('active-link'));
            if (link) link.classList.add('active-link');
        }
    });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// Images slideshow section

// MediBuddyAI
const medibuddy_ai = [
    "images/medibuddy-ai/0.png",
    "images/medibuddy-ai/1.png",
    "images/medibuddy-ai/2.png",
    "images/medibuddy-ai/3.png",
    "images/medibuddy-ai/4.png"
];

let index = 0;
const imgElement = document.getElementById("medibuddy_ai-image");

setInterval(() => {
    index = (index + 1) % medibuddy_ai.length;
    imgElement.style.opacity = 0; // fade out
    setTimeout(() => {
        imgElement.src = medibuddy_ai[index];
        imgElement.style.opacity = 1; // fade in
    }, 300);
}, 2000);


// HeartMart
const heart_mart = [
    "images/heart-mart/0.png",
    "images/heart-mart/1.png",
    "images/heart-mart/2.png",
    "images/heart-mart/3.png"
];

let heart_mart_index = 0;
const heart_mart_imgElement = document.getElementById("heart-mart-image");

setInterval(() => {
    heart_mart_index = (heart_mart_index + 1) % heart_mart.length;
    heart_mart_imgElement.style.opacity = 0; // fade out
    setTimeout(() => {
        heart_mart_imgElement.src = heart_mart[heart_mart_index];
        heart_mart_imgElement.style.opacity = 1; // fade in
    }, 300);
}, 2000);

// LQ Online
const lq_online = [
    "images/lq-online/0.png",
    "images/lq-online/1.png",
    "images/lq-online/2.png",
    "images/lq-online/3.png"
];

let lq_online_index = 0;
const lq_online_imgElement = document.getElementById("lq-online-image");

setInterval(() => {
    lq_online_index = (lq_online_index + 1) % lq_online.length;
    lq_online_imgElement.style.opacity = 0; // fade out
    setTimeout(() => {
        lq_online_imgElement.src = lq_online[lq_online_index];
        lq_online_imgElement.style.opacity = 1; // fade in
    }, 300);
}, 2000);

// Group3Restaurant
const group_3_restaurant = [
    "images/group-3-restaurant/0.png",
    "images/group-3-restaurant/1.png",
    "images/group-3-restaurant/2.png",
    "images/group-3-restaurant/3.png",
    "images/group-3-restaurant/4.png"
];

let group_3_restaurant_index = 0;
const group_3_restaurant_imgElement = document.getElementById("group-3-restaurant-image");

setInterval(() => {
    group_3_restaurant_index = (group_3_restaurant_index + 1) % group_3_restaurant.length;
    group_3_restaurant_imgElement.style.opacity = 0; // fade out
    setTimeout(() => {
        group_3_restaurant_imgElement.src = group_3_restaurant[group_3_restaurant_index];
        group_3_restaurant_imgElement.style.opacity = 1; // fade in
    }, 300);
}, 2000);



// AwardsAndHonors
const awards_honors = [
    "images/awards-and-honors/AAIMS25/0.jpg",
    "images/awards-and-honors/AAIMS25/1.jpg",
    "images/awards-and-honors/AAIMS25/2.jpg"
];

let awards_honorsIndex = 0;
const awards_honorsImgElement = document.getElementById("awards-honors-images");

setInterval(() => {
    awards_honorsIndex = (awards_honorsIndex + 1) % awards_honors.length;
    awards_honorsImgElement.style.opacity = 0; // fade out
    setTimeout(() => {
        awards_honorsImgElement.src = awards_honors[awards_honorsIndex];
        awards_honorsImgElement.style.opacity = 1; // fade in
    }, 300);
}, 3000);