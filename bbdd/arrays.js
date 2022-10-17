//Array principal en donde se gestionará la información de recetas guardadas y que se visualizarán al usuario en la aplicación.
//Todas las recetas creadas serán almacenadas en este array como objetos.
let recetasGuardadas = [
    /*
    Ejemplo de receta.
    {
    nombre: 'PILSEN',
    extractoOriginal: 0.125, //Porcentaje entre 0 y 1.
    volumen: 30500, //Litros.
    cantidadMalta: 5200, //Kilogramos.
    extractoMalta: 0.8, //Porcentaje entre 0 y 1.
    humedadMalta: 0.04 //Porcentaje entre 0 y 1.
    }*/
]

//Sincronización del Local Storage con el array 'recetasGuardadas'.
//Verifica si existe información almacenada en Local Storage
let recetasGuardadasLS = JSON.parse(localStorage.getItem('listadoRecetas'));

//Si no existe información guardada en el Local Storage, la aplicación trabajará con el array "recetasGuardadas" vacío. En caso contrario, el array tomará la informaci´pn guardada en el Local Storage y la almacenará dentro del array"
if (recetasGuardadasLS) {
    recetasGuardadas = recetasGuardadasLS;
}