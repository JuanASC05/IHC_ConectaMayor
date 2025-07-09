function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  return re.test(String(email).toLowerCase());
}

const form = document.forms["recuperarForm"];
form.addEventListener("submit", (event) => {
  const email = form.elements["email"].value.trim();
  const nueva = form.elements["nuevaContra"].value.trim();
  const confirmar = form.elements["confirmarContra"].value.trim();

  if (!email || !nueva || !confirmar) {
    event.preventDefault();
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (!validateEmail(email)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  if (nueva.length < 6) {
    event.preventDefault();
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (nueva !== confirmar) {
    event.preventDefault();
    alert("Las contraseñas no coinciden.");
    return;
  }

  const confirmarAccion = confirm("¿Desea actualizar su contraseña?");
  if (!confirmarAccion) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  alert("¡Contraseña actualizada correctamente!");
  form.reset();
  window.location.href = "identificacionIS.html";
});
