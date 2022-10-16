//Creando evento para creación de nuevas recetas
const botonCrear = document.querySelector('#boton-crear-receta-enviar');
botonCrear.addEventListener('click', crearReceta);

//Creando evento para modificación de recetas guardadas
const botonModificar = document.querySelector('#boton-modificar-receta');
botonModificar.addEventListener('click', modificarReceta);

//Creando evento para eliminación de recetas guardadas
const botonEliminar = document.querySelector('#boton-eliminar-receta');
botonEliminar.addEventListener('click', eliminarReceta);