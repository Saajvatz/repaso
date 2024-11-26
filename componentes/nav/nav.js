// JavaScript para el menú móvil interactivo

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón de menú y la lista de navegación
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    // Agregar un evento al botón del menú para alternar el menú en pantallas pequeñas
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });
});
