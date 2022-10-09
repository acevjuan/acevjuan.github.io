//Todas las recetas creadas serán almacenadas en este array como objetos.
let recetasGuardadas = [
    //Ejemplo de receta.
    // {
    //     nombre: 'PILSEN',
    //     extractoOriginal: 0.125, //Porcentaje entre 0 y 1.
    //     volumen: 30500, //Litros.
    //     cantidadMalta: 5200, //Kilogramos.
    //     extractoMalta: 0.8, //Porcentaje entre 0 y 1.
    //     humedadMalta: 0.04 //Porcentaje entre 0 y 1.
    // }
]

//Sincronización del Local Storage con el array 'recetasGuardadas'.
let recetasGuardadasLS = JSON.parse(localStorage.getItem('listadoRecetas'));

if (recetasGuardadasLS) {
    recetasGuardadas = recetasGuardadasLS;
}