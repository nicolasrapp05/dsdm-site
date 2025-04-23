function startLearning() {
  window.location.href = "quizzes.html"; // ou outro link real
}

// Animação ao rolar com Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));

  // Menu Sanduíche (Modificado)
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav"); // Seleciona o nav existente

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("menu-active"); // Nova classe para evitar conflito
    menuBtn.classList.toggle("active"); // Mantém a animação do botão
  });
});
