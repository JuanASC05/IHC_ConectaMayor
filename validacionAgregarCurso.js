const formCurso = document.getElementById("formularioActividad");

formCurso.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = formCurso.elements["Nom-actividad"].value.trim();
  const descripcion = formCurso.elements["descripcion"].value.trim();
  const tipo = formCurso.elements["TipoActividad"].value.trim();

  if (!nombre || !descripcion || !tipo) {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  const confirmar = confirm("¿Desea agregar esta nueva actividad?");
  if (!confirmar) return;

  alert("✅ ¡Actividad agregada exitosamente!");
  formCurso.reset();
});

function asignarCursos() {
  const usuario = document.getElementById("usuario").value;
  const cursosSeleccionados = Array.from(
    document.getElementById("curso").selectedOptions
  ).map((option) => option.text);
  const mensajeDiv = document.getElementById("mensajeConfirmacion");

  if (!usuario || cursosSeleccionados.length === 0) {
    mensajeDiv.style.color = "red";
    mensajeDiv.innerText =
      "Por favor, selecciona un usuario y al menos un curso.";
    return;
  }


  mensajeDiv.style.color = "green";
  mensajeDiv.innerText = `Se asignó correctamente ${
    cursosSeleccionados.length > 1 ? "los cursos" : "el curso"
  } a ${usuario}.`;
}
