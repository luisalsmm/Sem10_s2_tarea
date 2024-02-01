// Obtén el botón y el menú por su ID
const toggleButton = document.getElementById("toggleButton");
const menu = document.getElementById("menu");

// Agrega un evento de clic al botón para mostrar/ocultar el menú
toggleButton.addEventListener("click", function() {
  // Alternar la clase 'hidden' para mostrar u ocultar el menú
  menu.classList.toggle("hidden");
});
