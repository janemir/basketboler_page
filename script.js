document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector(".arrow"); // Находим стрелку
    const popupMenu = document.querySelector(".popup-menu"); // Popup-меню
  
    // Функция для открытия/закрытия меню
    arrow.addEventListener("click", (event) => {
      event.stopPropagation(); // Предотвращаем всплытие события
  
      if (popupMenu.style.display === "block") {
        // Скрыть меню
        popupMenu.style.opacity = "0";
        popupMenu.style.transform = "translateY(-10px)";
        setTimeout(() => (popupMenu.style.display = "none"), 300); // Анимация
      } else {
        // Показать меню
        popupMenu.style.display = "block";
        setTimeout(() => {
          popupMenu.style.opacity = "1";
          popupMenu.style.transform = "translateY(0)";
        }, 0);
      }
    });
  
    // Скрытие popup при клике вне него
    document.addEventListener("click", (e) => {
      if (!arrow.contains(e.target) && !popupMenu.contains(e.target)) {
        popupMenu.style.opacity = "0";
        popupMenu.style.transform = "translateY(-10px)";
        setTimeout(() => (popupMenu.style.display = "none"), 300);
      }
    });
  });
  