function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && 
        rect.bottom > 0
    );
}

function handleScroll() {
    const animatedElement = document.querySelector('#fnav');
    

    if (isElementInViewport(animatedElement)) {
        animatedElement.style.animation = "startAnimationNavigation2 2000ms normal";
        // Удаляем обработчик события после анимации
        window.removeEventListener('scroll', handleScroll);
    }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);