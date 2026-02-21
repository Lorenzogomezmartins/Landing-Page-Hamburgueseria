async function loadComponent(id, file) {
  const res = await fetch(`partials/${file}`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function initPage() {
  await loadComponent("header", "header.html");
  await loadComponent("hero", "hero.html");
  await loadComponent("menu", "menu.html");
  await loadComponent("novedades", "novedades.html");
  await loadComponent("contacto", "contacto.html");
  await loadComponent("footer", "footer.html");
  await loadComponent("whatsapp", "whatsapp.html");

  // Inicializamos el carrusel después de cargar novedades
  if (typeof initNovedadesCarousel === "function") {
    initNovedadesCarousel();
  }

  // Activamos el scroll animado
  initSmoothScroll();
}

function initSmoothScroll() {
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[href^='#']");
    if (!link) return;

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const offset = 80; // altura del header
    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
}

initPage();