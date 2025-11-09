//Desplegar formulario
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleForm");
  const form = document.querySelector(".contactForm");

form.classList.add("hide");

toggleBtn.addEventListener("click", function () {
    form.classList.toggle("hide");

    if (!form.classList.contains("hide")) {
      form.classList.add("fade-in");
    } else {
      form.classList.remove("fade-in");
    }
  });
});