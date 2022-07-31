const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    scrollposition = window.scrollY;

    if( scrollposition >= 60 ){
        nav.classList.add('nav-scroll');
    }else if ( scrollposition <= 60 ){
        nav.classList.remove('nav-scroll');
    }
})

