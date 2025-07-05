document
  .getElementById("formMensajes")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const mensaje = document.getElementById("mensaje").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const frecuencia = document.getElementById("frecuencia").value;

    if (!mensaje || !fecha || !hora || !frecuencia) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Aquí se simula el guardado y programación del mensaje
    console.log("Mensaje:", mensaje);
    console.log("Fecha:", fecha);
    console.log("Hora:", hora);
    console.log("Frecuencia:", frecuencia);

    document.getElementById("confirmacion").style.display = "block";

    // Opcional: limpiar campos después
    this.reset();
  });
