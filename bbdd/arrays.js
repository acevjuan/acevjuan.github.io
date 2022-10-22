//Array principal en donde se gestionará la información de recetas guardadas y que se visualizarán al usuario en la aplicación.
//Todas las recetas creadas serán almacenadas en este array como objetos.
let recetasGuardadas = [
    /*
    Ejemplo de receta.
    {
    nombre: 'PILSEN',
    extractoOriginal: 11.5,
    volumen: 100,
    cantidadMalta: 35,
    extractoMalta: 8,
    humedadMalta: 5
    }*/
]

//Sincronización del Local Storage con el array 'recetasGuardadas'.
//Verifica si existe información almacenada en Local Storage
let recetasGuardadasLS = JSON.parse(localStorage.getItem('listadoRecetas'));

//Si no existe información guardada en el Local Storage, la aplicación trabajará con el array "recetasGuardadas" vacío. En caso contrario, el array tomará la informaci´pn guardada en el Local Storage y la almacenará dentro del array"
if (recetasGuardadasLS) {
    recetasGuardadas = recetasGuardadasLS;
}