console.log("Hello from my portfolio!");

const topBtn = document.getElementById('top');

window.addEventListener('scroll', () => { 
    if (window.pageYOffset > 300) { 
        topBtn.classList.add('show');
    } else { 
        topBtn.classList.remove('show');
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});