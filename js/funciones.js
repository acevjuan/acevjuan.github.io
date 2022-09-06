//Realiza el cálculo de cebada malteada requerida para la receta deseada por el usuario y guarda la misma dentro del array "recetasGuardadas".
function crearReceta() {
    let nombreCerveza = prompt('Indicar el nombre de la cerveza:');
    let eo = parseFloat(prompt('¿Cuánto es el extracto original deseado? (entre 0 y 1):'));
    let vol = parseFloat(prompt('¿Cuántos litros de cerveza quieres elaborar?:'));
    let extMal = parseFloat(prompt('¿Cuál es el extracto de la malta a utilizar? (entre 0 y 1):'));
    let hMal = parseFloat(prompt('¿Cuál es la humedad de la malta? (entre 0 y 1):'));

    //Calculo de gravedad específica.
    let sg = ((eo * 4)/1000) + 1

    //Cálculo de cantidad de malta necesaria para la receta (kilogramos).
    let cantMal = (vol * sg * densidadAgua * eo) / (extMal * (1 - hMal) * eficiencia);

    recetasGuardadas.push(new Recetas(nombreCerveza, eo, vol, cantMal, extMal, hMal));

    alert('Receta creada con éxito.');

    console.table(recetasGuardadas);
}

//Permite modificar recetas en el array "recetasGuardadas". Indicar el índice dentro del array.
function modificarReceta() {
    let recetaModificar = parseInt(prompt('Indicar el ID de la receta a modificar'));
    if (recetaModificar < recetasGuardadas.length) {
        let eo = parseFloat(prompt('¿Cuánto es el nuevo extracto original deseado? (entre 0 y 1):'));
        let vol = parseFloat(prompt('¿Cuántos litros de cerveza quieres elaborar?:'));
        let extMal = parseFloat(prompt('¿Cuál es el nuevo extracto de la malta a utilizar? (entre 0 y 1):'));
        let hMal = parseFloat(prompt('¿Cuál es la nueva humedad de la malta? (entre 0 y 1):'));

        //Calculo de gravedad específica.
        let sg = ((eo * 4)/1000) + 1;

        //Cálculo de cantidad de malta necesaria para la receta (kilogramos).
        let cantMal = (vol * sg * densidadAgua * eo) / (extMal * (1 - hMal) * eficiencia);

        let confirmacionModificar = confirm('¿Modificar receta?');
        if(confirmacionModificar === true) {
            recetasGuardadas[recetaModificar].extractoOriginal = eo;
            recetasGuardadas[recetaModificar].volumen = vol;
            recetasGuardadas[recetaModificar].extractoMalta = extMal;
            recetasGuardadas[recetaModificar].humedadMalta = hMal;
            recetasGuardadas[recetaModificar].cantidadMalta = cantMal;
            alert('Receta modificada con éxito')
        } else {
            alert('Proceso finalizado. No existen cambios');
        }
    } else {
        alert('Proceso finalizado. No existen cambios');
    }
    console.table(recetasGuardadas);
}

//Permite eliminar recetas en el array 2recetasGuardadas". indicar el índice dentro del array.
function eliminarReceta() {
    let recetaEliminar = parseInt(prompt('Indicar el ID de la receta a eliminar'));
    if (recetaEliminar < recetasGuardadas.length) {
        let confirmacionEliminar = confirm('¿Eliminar receta?');
        if(confirmacionEliminar === true) {
            recetasGuardadas.splice(recetaEliminar, 1);
            alert('Receta eliminada con éxito')
        } else {
            alert('Proceso finalizado. No existen cambios');
        }
    } else {
        alert('Proceso finalizado. No existen cambios');
    }
    console.table(recetasGuardadas);
}

//Muestra en la consola todas las recetas guardadas con un texto genérico describiendo cómo elaborarlas.
function imprimirRecetas() {
    for(let i = 0; i < recetasGuardadas.length; i++) {
        console.log(`Para elaborar ${recetasGuardadas[i].volumen} litros (L) de la cerveza ${recetasGuardadas[i].nombre} con extracto original de ${recetasGuardadas[i].extractoOriginal * 100} ºP, se requiere ${recetasGuardadas[i].cantidadMalta} kg de cebada malteada`);
    }
}