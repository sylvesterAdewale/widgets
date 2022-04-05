const marker = document.querySelector('.marker');
const items = document.querySelectorAll('nav ul li');

function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

items.forEach(item => {
    item.addEventListener('click', e => {
        indicator(e.target)
    })
})