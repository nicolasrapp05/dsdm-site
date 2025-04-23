// Função para controlar o menu de navegação
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("visible");
});

// Animação de fade-in para os elementos
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));
});
