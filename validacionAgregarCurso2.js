
const formCurso = document.getElementById("formularioAgregarCurso");

formCurso.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("NombreCurso").value.trim();
  const descripcion = document.getElementById("Descripcion").value.trim();
  const objetivo = document.getElementById("Objetivo").value.trim();

  if (!nombre || !descripcion || !objetivo) {
    alert("Por favor, complete todos los campos del formulario de curso.");
    return;
  }


  alert("¡Curso agregado exitosamente!");

  
  formCurso.reset();
});


