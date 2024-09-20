const wrapper = document.querySelector('.wrapper');

function activeSignIn() {
    wrapper.classList.remove('activeSignUP');
    wrapper.classList.add('activeSignIn');
}

function activeSignUP() {
    wrapper.classList.remove('activeSignIn');
    wrapper.classList.add('activeSignUP');
}

function changeColor(color) {
    const curved = document.getElementById('curved');
    const bgAnimate = document.getElementById('bg-animate');

    curved.style.background = color;
    bgAnimate.style.background = color;
    bgAnimate.classList.add('active');

    setTimeout(function() {
        bgAnimate.classList.remove('active');
    }, 1200);
}

const colors = document.querySelectorAll('.color');

function activeLink() {
    colors.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

colors.forEach(item => item.addEventListener('click', activeLink));
