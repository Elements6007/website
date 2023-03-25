var nav = document.querySelector('nav');
var newImageUrl = Logo.src;
var urlLocation;
if (document.URL.indexOf("projects") > -1) {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 5) {
            nav.classList.add('bg-dark', 'shadow');
            newImageUrl = "../img/elementslogo4.webp";
        } else {
            nav.classList.remove('bg-dark', 'shadow');
            newImageUrl = "../img/elementslogo3.webp";
        }

        Logo.src = newImageUrl;
    });
} else {

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 5) {
            nav.classList.add('bg-dark', 'shadow');
            newImageUrl = "img/elementslogo4.webp";
        } else {
            nav.classList.remove('bg-dark', 'shadow');
            newImageUrl = "img/elementslogo3.webp";
        }

        Logo.src = newImageUrl;
    });
}