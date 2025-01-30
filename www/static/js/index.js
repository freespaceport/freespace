function showMenu() {
    var menuDialog = document.getElementById('menu-dialog');
    menuDialog.show();
    var menu = document.getElementById('menu-img-bar');
    menu.style.transform = "rotateZ(90deg)";
    menu.style.transition = "transform 2s, box-shadow 3s";
}

function closeMenu() {
    var menuDialog = document.getElementById('menu-dialog');
    menuDialog.close();
    var menu = document.getElementById('menu-img-bar');
    menu.style.transform = "rotateZ(0deg)";
    menu.style.transition = "transform 2s, box-shadow 3s";
}


// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && 
        rect.bottom > 0
    );
}

// Функция для добавления анимации
function handleScroll() {
    const animatedElement = document.querySelector('#offer-btn');
    const animatedElement2 = document.querySelector("#welcome");

    if (isElementInViewport(animatedElement2)) {
        animatedElement2.style.animation = "WelcomeAnimation 1.5s normal";
    }


    if (isElementInViewport(animatedElement)) {
        animatedElement.style.animation = "Op1 2s normal";
        // Удаляем обработчик события после анимации
        window.removeEventListener('scroll', handleScroll);
    }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);


var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2100
    },
    allowTouchMove: false, 
    speed: 1750,
});

