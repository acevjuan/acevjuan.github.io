//Mostrar tabla de recetas guardades en aplicación apenas abra la página.
generarTablaDeRecetas();

//Para mostrar al abrir el navegador cuáles recetas están almacenadas en ese momento.
console.table(recetasGuardadas);

//Inclusión de valores prederteminados en formulario de creación de recetas, para facilitar corrección por parte del profesor.
document.querySelector('#nombre').value = 'Cerveza de prueba';
document.querySelector('#extracto').value = 11;
document.querySelector('#volumen').value = 50;
document.querySelector('#ext-mal').value = 82;
document.querySelector('#humedad').value = 4;