// JavaScript para agregar interactividad al footer

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces dentro del footer
    const footerLinks = document.querySelectorAll('footer a');

    // Añadimos un evento de clic para mostrar un mensaje de agradecimiento
    footerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace haga su acción predeterminada
            alert("¡Gracias por visitar nuestro sitio!");
        });
    });
});
