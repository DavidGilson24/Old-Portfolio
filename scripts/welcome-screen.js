document.addEventListener('DOMContentLoaded', function () {
    var welcomeScreen = document.getElementById('welcome-screen');
    var body = document.body;

    window.onbeforeunload = function () 
    {
        window.scrollTo(0, 0);
    }      

    body.classList.add('no-scroll');

    setTimeout(function () {
        welcomeScreen.style.opacity = '0';

        setTimeout(function () {
            welcomeScreen.style.display = 'none';
            body.classList.remove('no-scroll');
        }, 5);
    }, 2500);
});