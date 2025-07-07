const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
  const nombre = form.elements["Nombre"].value.trim();
  const contraseña = form.elements["Contraseña"].value.trim();

  if (!nombre || !contraseña) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
    return;
  }

  const confirmation = confirm("¿Desea continuar con el inicio de sesión?");
  if (!confirmation) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  alert("¡Inicio de sesión exitoso!");
  window.location.href = "paginaInicioPROFESIONAL.html";
});
