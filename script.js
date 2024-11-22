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
    const wrapper = document.querySelector(".product-wrapper");
    const carousel = wrapper.querySelector(".product-carousel");
    const leftArrow = document.querySelector(".product-decorator.left");
    const rightArrow = document.querySelector(".product-decorator.right");
    const slider = document.querySelector(".slider");
    const scrollLine = document.querySelector(".scroll-line");
    const productCards = Array.from(carousel.children);

    let isDragging = false; 
    let initialMouseX = 0;
    let initialLeft = 0; 
    let currentOffset = 0; 

    const totalCards = productCards.length; 


    const moveRight = () => {
        currentOffset = (currentOffset + 1) % totalCards; 
        updateCardOrder();
        updateSliderPosition(); 
    };

    const moveLeft = () => {
        currentOffset = (currentOffset - 1 + totalCards) % totalCards; 
        updateCardOrder();
        updateSliderPosition(); 
    };

    leftArrow.addEventListener("click", moveLeft);
    rightArrow.addEventListener("click", moveRight);

    slider.addEventListener("mousedown", (e) => {
        isDragging = true;
        initialMouseX = e.clientX; 
        initialLeft = parseFloat(getComputedStyle(slider).left) || 0; 
        document.body.style.userSelect = "none"; 
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = ""; 
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return; 

        const rect = scrollLine.getBoundingClientRect(); 
        const deltaX = e.clientX - initialMouseX; 
        let newLeft = initialLeft + deltaX; 

        if (newLeft < 0) newLeft = 0; 
        if (newLeft > rect.width - slider.offsetWidth) newLeft = rect.width - slider.offsetWidth; 

        slider.style.left = `${newLeft}px`; 

        const sliderPosition = newLeft / (rect.width - slider.offsetWidth); 
        currentOffset = Math.round(sliderPosition * totalCards); 
        updateCardOrder(); 
    });

    function updateCardOrder() {
        productCards.forEach((card, index) => {
            card.style.order = (index + currentOffset) % totalCards; 
        });
    }

    function updateSliderPosition() {
        const rect = scrollLine.getBoundingClientRect();
        const sliderPosition = currentOffset / totalCards;
        slider.style.left = `${sliderPosition * (rect.width - slider.offsetWidth)}px`;
    }

    updateCardOrder();
    updateSliderPosition();
});



