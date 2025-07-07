const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombres = form.querySelector('#nombres').value.trim();
  const apellidos = form.querySelector('#apellidos').value.trim();
  const dni = form.querySelector('#dni').value.trim();
  const password = form.querySelector('#password').value.trim();
  const confirmPassword = form.querySelector('#confirm-password').value.trim();
  const autorizacion = form.querySelector('#autorizacion').checked;

  if (!nombres || !apellidos || !dni || !password || !confirmPassword) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Validar DNI (solo números y 8 dígitos)
  if (!/^\d{8}$/.test(dni)) {
    alert("El DNI debe contener exactamente 8 dígitos numéricos.");
    return;
  }

 
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Intente nuevamente.");
    return;
  }


  if (!autorizacion) {
    alert("Debe confirmar que tiene autorización del adulto mayor.");
    return;
  }


  const confirmacion = confirm("¿Desea finalizar el registro?");
  if (!confirmacion) return;

  
  alert("¡Registro exitoso con ayuda de un familiar!");
  window.location.href = "paginaInicioAdulto.html";
});
