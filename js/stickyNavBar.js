document.addEventListener("scroll", function() {
    // Obtener el elemento con el id 'navBar'
    let stickyElement = document.getElementById('navBar');
    
    if (window.scrollY > 250) {
        // Agregar la clase cuando el desplazamiento es mayor a 250px
        stickyElement.classList.add('sticky-nav');
    } else {
        // Quitar la clase cuando el desplazamiento es menor o igual a 250px
        stickyElement.classList.remove('sticky-nav');
    }
});
