/* Función para que aparezcan las redes sociales al hacer click */
const shareOption = document.querySelector(".option-share");
document.querySelector(".button-share").addEventListener("click", function () {
  this.classList.toggle("active");
  shareOption.classList.toggle("active");
});
