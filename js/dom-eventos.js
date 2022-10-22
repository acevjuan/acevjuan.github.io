//Sincronizando el listado de recetas guardadas con el DOM.
const recetas = document.querySelector('.recetas-guardadas');

//Sincronizando el listado de guìa de extractos con el DOM.
const guiaExtractos = document.querySelector('.guia-extractos');

//Creando evento para creación de nuevas recetas
const botonCrear = document.querySelector('#boton-crear-receta-enviar');
botonCrear.addEventListener('click', crearReceta);