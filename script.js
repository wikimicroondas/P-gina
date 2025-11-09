// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleForm");
  const form = document.querySelector(".contactForm");

  // Oculta el formulario al inicio
  form.classList.add("hide");

  // Al hacer clic en el botón, alterna la clase "hide"
  toggleBtn.addEventListener("click", function () {
    form.classList.toggle("hide");

    // Añade o quita animación de aparición
    if (!form.classList.contains("hide")) {
      form.classList.add("fade-in");
    } else {
      form.classList.remove("fade-in");
    }
  });
});