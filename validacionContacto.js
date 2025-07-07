const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const nombre = form.elements["nombre"].value.trim();
  const correo = form.elements["correo"].value.trim();
  const mensaje = form.elements["mensaje"].value.trim();


  if (!nombre || !correo || !mensaje) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (!validateEmail(correo)) {
    alert("Ingrese un correo electrónico válido.");
    return;
  }


  const confirmacion = confirm("¿Desea enviar el mensaje?");
  if (!confirmacion) return;

  alert("✅ ¡Tu mensaje ha sido enviado exitosamente!");
  form.reset();
});


function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  return re.test(String(email).toLowerCase());
}
