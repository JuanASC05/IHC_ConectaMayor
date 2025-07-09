
  const btn = document.querySelector('button[type="submit"]');
  const formContainer = document.getElementById("formulario-cita");
  const form = formContainer.querySelector("form");


  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.style.display = "block";
    btn.style.display = "none";
  });

 
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const fecha = form.elements["fecha"].value.trim();
    const hora = form.elements["hora"].value.trim();
    const motivo = form.elements["motivo"].value.trim();

    if (!fecha || !hora || !motivo) {
      alert("Por favor, complete todos los campos de la cita.");
      return;
    }

    const confirmar = confirm("¿Desea confirmar la cita?");
    if (!confirmar) return;

    alert(" ¡Cita agendada exitosamente!");
    form.reset();
    formContainer.style.display = "none";
    btn.style.display = "inline-block"; 
  });

