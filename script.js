document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".arrow"); 
  const popupMenu = document.querySelector(".popup-menu"); 
  arrow.addEventListener("click", (event) => {
    event.stopPropagation(); 

    if (popupMenu.style.display === "block") {
      popupMenu.style.opacity = "0";
      popupMenu.style.transform = "translateY(-10px)";
      setTimeout(() => (popupMenu.style.display = "none"), 300); 
    } else {
      popupMenu.style.display = "block";
      setTimeout(() => {
        popupMenu.style.opacity = "1";
        popupMenu.style.transform = "translateY(0)";
      }, 0);
    }
  });


  document.addEventListener("click", (e) => {
    if (!arrow.contains(e.target) && !popupMenu.contains(e.target)) {
      popupMenu.style.opacity = "0";
      popupMenu.style.transform = "translateY(-10px)";
      setTimeout(() => (popupMenu.style.display = "none"), 300);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".product-carousel");
    const leftArrow = document.querySelector(".product-decorator.left");
    const rightArrow = document.querySelector(".product-decorator.right");

    // Перемещение карточек по клику на стрелки
    const moveRight = () => {
        const firstCard = carousel.firstElementChild;
        carousel.appendChild(firstCard); // Перемещаем первую карточку в конец
    };

    const moveLeft = () => {
        const lastCard = carousel.lastElementChild;
        carousel.insertBefore(lastCard, carousel.firstElementChild); // Перемещаем последнюю карточку в начало
    };

    // Обработчики для стрелок
    leftArrow.addEventListener("click", () => {
        carousel.style.transition = "none"; // Отключаем анимацию для перестановки
        moveLeft();
        requestAnimationFrame(() => {
            carousel.style.transition = "transform 0.5s ease"; // Включаем анимацию
            carousel.style.transform = "translateX(0)"; // Сбрасываем смещение
        });
    });

    rightArrow.addEventListener("click", () => {
        carousel.style.transition = "none"; // Отключаем анимацию для перестановки
        moveRight();
        requestAnimationFrame(() => {
            carousel.style.transition = "transform 0.5s ease"; // Включаем анимацию
            carousel.style.transform = "translateX(0)"; // Сбрасываем смещение
        });
    });
});



