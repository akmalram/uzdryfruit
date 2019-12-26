const ready = (callback) => {
    window.addEventListener('DOMContentLoaded', (e) => {
        callback(e);
    })
}

ready(() => {
    const MenuClassToggler = () => {
        const btn = document.querySelector('.navbar-toggler .btn');
        const menu = document.querySelector('.navbar-menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
            document.querySelector('body').classList.toggle('overhidden');
        });
    }

    MenuClassToggler();
});


ready(() => {
    const element = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {


        if(window.pageYOffset > 0) {
            element.classList.add('scrolled');
        }else if (window.pageYOffset < 200) {
            element.classList.remove('scrolled');
        }
    });

    if(window.pageYOffset > 0) {
        element.classList.add('scrolled');
    }else if (window.pageYOffset == 0) {
        element.classList.remove('scrolled');
    }
});

// ready(() => {
//     const form = document.querySelector('.form');

//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         $.ajax({
//             method: 'POST',
//             url: '../send.php',
//             data: $(form).serialize()
//         }).done(() => {
//             alert('Done!')
//             form.reset();
//         });
//     });
// });

// Font Observing

const fontAwesomeFreeObserver = new FontFaceObserver('Font Awesome 5 Free');
const fontAwesomeBrandsObserver = new FontFaceObserver('Font Awesome 5 Brands');
const gilroyObserver = new FontFaceObserver('Merriweather');

Promise.all([
    fontAwesomeFreeObserver.load(),
    fontAwesomeBrandsObserver.load(),
    gilroyObserver.load()
]).then(() => {
    document.querySelector('html').classList.add('fonts-loaded');
});
