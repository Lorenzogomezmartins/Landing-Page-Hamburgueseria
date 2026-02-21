function initNovedadesCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!items.length) {
    console.log("No se encontraron items del carrusel");
    return;
  }

  let current = 1;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove("left", "center", "right");

      if (index === current) {
        item.classList.add("center");
      } else if (index === (current - 1 + items.length) % items.length) {
        item.classList.add("left");
      } else if (index === (current + 1) % items.length) {
        item.classList.add("right");
      }
    });
  }

  nextBtn?.addEventListener("click", () => {
    current = (current + 1) % items.length;
    updateCarousel();
  });

  prevBtn?.addEventListener("click", () => {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
  });

  updateCarousel();
}