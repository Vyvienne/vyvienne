const links = [...document.querySelectorAll('#menu a')];
const panels = [...document.querySelectorAll('.panel')];
let current = -1;

// Select an item: the panel frame stays put, only its content swaps
function select(n, push = true) {
    n = (n + links.length) % links.length;
    if (n === current) return;
    current = n;
    links.forEach((a, k) => a.classList.toggle('on', k === n));
    panels.forEach(p => p.classList.toggle('on', p.id === links[n].dataset.p));
    if (push) history.replaceState(null, '', '#' + links[n].dataset.p);
}

const menu = document.getElementById('menu');
const burger = document.getElementById('hamburger');
const setMenu = open => {
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
};
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));

links.forEach((a, k) => a.addEventListener('click', e => { e.preventDefault(); select(k); setMenu(false); }));

document.addEventListener('keydown', e => {
    if (e.target.closest('a.row, .social a')) return;
    if (e.key === 'ArrowDown' || e.key === 's') select(current + 1);
    if (e.key === 'ArrowUp' || e.key === 'w') select(current - 1);
});

const start = links.findIndex(a => a.dataset.p === location.hash.slice(1));
select(start < 0 ? 0 : start, false);

// Calendar widget
const now = new Date();
document.getElementById('date').textContent = `${now.getMonth() + 1}/${now.getDate()}`;
document.getElementById('day').textContent = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

// Typewriter
const tw = document.querySelector('.typewriter');
const full = tw.textContent;
tw.textContent = '';
const typed = document.createElement('span');
const cursor = Object.assign(document.createElement('span'), { className: 'cursor' });
tw.append(typed, cursor);
let i = 0;
(function type() {
    if (i < full.length) {
        typed.textContent += full[i] === ' ' ? '\u00A0' : full[i];
        i++;
        setTimeout(type, 90);
    }
})();