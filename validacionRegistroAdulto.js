const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const nombre = form.elements["Nombres"].value.trim();
  const apellido = form.elements["Apellidos"].value.trim();
  const contra = form.elements["Contraseña"].value.trim();
  const confirmContra = form.elements["ConfirmContraseña"].value.trim();
  const terminos = form.elements["terminos"].checked;

  if (!nombre || !apellido || !contra || !confirmContra) {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  
  if (contra !== confirmContra) {
    alert("Las contraseñas no coinciden. Intente nuevamente.");
    return;
  }

 
  if (!terminos) {
    alert("Debe aceptar los términos y condiciones para continuar.");
    return;
  }


  const confirmar = confirm("¿Desea completar el registro?");
  if (!confirmar) return;

 
  alert("¡Registro exitoso!");
  window.location.href = "paginaInicioAdulto.html";
});
