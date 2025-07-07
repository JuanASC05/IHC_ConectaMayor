
const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
  const nombre = form.elements["Nombres"].value.trim();
  const email = form.elements["email"].value.trim();
  const pass = form.elements["Contraseña"].value.trim();
  const confirmPass = form.elements["ConContraseña"].value.trim();
  const terminos = form.elements["terminos"].checked;

  if (!nombre || !email || !pass || !confirmPass) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }


  if (!validateEmail(email)) {
    event.preventDefault();
    alert("Ingrese un correo electrónico válido.");
    return;
  }


  if (pass !== confirmPass) {
    event.preventDefault();
    alert("Las contraseñas no coinciden.");
    return;
  }


  if (!terminos) {
    event.preventDefault();
    alert("Debe aceptar los Términos y Condiciones.");
    return;
  }


  const confirmation = confirm("¿Desea completar su registro?");
  if (!confirmation) {
    event.preventDefault();
    return;
  }


  event.preventDefault(); 
  alert("¡Registro exitoso!");
  window.location.href = "paginaInicioPROFESIONAL.html";
});


function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  return re.test(String(email).toLowerCase());
}
