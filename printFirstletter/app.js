const input = document.querySelector('input');
const submit = document.querySelector('button');
const place = document.querySelector('.prof')


function enter(e) {
    e.preventDefault()
    const value = input.value;
    place.textContent = value.charAt(0)
}

submit.addEventListener('click', enter)