
const botonCrear = document.querySelector('#boton-crear-receta-enviar');
botonCrear.addEventListener('click', crearReceta);

const botonModificar = document.querySelector('#boton-modificar-receta');
botonModificar.addEventListener('click', modificarReceta);

const botonEliminar = document.querySelector('#boton-eliminar-receta');
botonEliminar.addEventListener('click', eliminarReceta);

const sweet = document.querySelector('#sa');
sweet.addEventListener('click', () => Swal.fire('Any fool can use a computer'));