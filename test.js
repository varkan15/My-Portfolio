console.log("Hello from my portfolio!");

const top = document.getElementById('top');

window.addEventListener('scroll', () => { 
    if (window.pageYOffset > 300) { 
        top.classList.add('show');
    } else { 
        top.classList.remove('show');
    }
});

top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});