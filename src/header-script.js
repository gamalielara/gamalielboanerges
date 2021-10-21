window.addEventListener('scroll', () => {
    const theHeader = document.getElementById('header');
    theHeader.classList.toggle('bg-black', window.scrollY > 0);
})