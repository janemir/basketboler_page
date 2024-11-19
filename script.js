document.addEventListener("DOMContentLoaded", () => {
    // Находим элемент с классом "arrow-container"
    const arrowContainer = document.querySelector(".arrow");
  
    // Назначаем обработчик события клика
    arrowContainer.addEventListener("click", () => {
      console.log("Клик по стрелке!");
  
      // Выполняем нужные действия, например, показываем popup
      const popup = document.querySelector(".popup-menu");
      popup.style.display = popup.style.display === "block" ? "none" : "block";
    });
  });
  