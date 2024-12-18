// Кнопка "Наверх"
const backToTopBtn = document.getElementById('backToTop');

// Показать/скрыть кнопку при прокрутке
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Скролл наверх
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Эффекты появления при прокрутке
const scrollElements = document.querySelectorAll('.card, .gallery img, .contacts');

// Функция для проверки видимости элемента
const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
};

// Появление элемента
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
};

// Событие прокрутки
window.addEventListener('scroll', handleScrollAnimation);

// Активация эффекта при загрузке
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
 


// Добавьте этот код в script.js
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});





// Добавьте в script.js
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Запуск анимации при появлении элемента в viewport
const achievementNumbers = document.querySelectorAll('.achievement-number');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

achievementNumbers.forEach(number => observer.observe(number));
