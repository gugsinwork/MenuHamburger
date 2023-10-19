document.addEventListener('DOMContentLoaded', function () {
   
    const expandButton = document.getElementById('ButtonExpandId');
    const menu = document.getElementById('menu');


    expandButton.addEventListener('click', function () {
        if (menu.style.width === '200px') {
            menu.style.width = '50px';
        } else {
            menu.style.width = '200px';
        }
    });
});