
  const formMensajes = document.getElementById("formMensajes");
  const confirmacion = document.getElementById("confirmacion");
  
  formMensajes.addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const mensaje = document.getElementById("mensaje").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const frecuencia = document.getElementById("frecuencia").value;
  

    if (!mensaje || !fecha || !hora || !frecuencia) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
  
 
    confirmacion.style.display = "block";
  
  
    formMensajes.reset();
  });
  