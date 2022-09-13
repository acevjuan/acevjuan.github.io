function generarTablaDeRecetas() {
    recetas.innerHTML = `
        <tr class="recetas-guardadas__encabezado">
            <th class="recetas-guardadas__encabezado__index">ID</th>
            <th class="recetas-guardadas__encabezado__nombre">NOMBRE</th>
            <th class="recetas-guardadas__encabezado__extracto-original">EXTRACTO ORIGINAL, ºP</th>
            <th class="recetas-guardadas__encabezado__volumen">VOLUMEN, L</th>
            <th class="recetas-guardadas__encabezado__cantidad-malta">CANTIDAD DE MALTA, kg</th>
            <th class="recetas-guardadas__encabezado__extracto-malta">EXTRACTO DE MALTA, %</th>
            <th class="recetas-guardadas__encabezado__humedad-malta">HUMEDAD DE MALTA, %</th>
            <th></th>
            <th></th>
        </tr>`;
    
    let numFila = 1;
    
    recetasGuardadas.forEach(recetasGuardadas => {
        let fila = "";
            fila = `
                    <tr id="receta-${numFila}" class="recetas-guardadas__receta">
                        <td class="recetas-guardadas__receta__index">${numFila}</td>
                        <td class="recetas-guardadas__receta__nombre">${recetasGuardadas.nombre}</td>
                        <td class="recetas-guardadas__receta__extracto-original">${recetasGuardadas.extractoOriginal}</td>
                        <td class="recetas-guardadas__receta__volumen">${recetasGuardadas.volumen}</td>
                        <td class="recetas-guardadas__receta__cantidad-malta">${recetasGuardadas.cantidadMalta}</td>
                        <td class="recetas-guardadas__receta__extracto-malta">${recetasGuardadas.extractoMalta}</td>
                        <td class="recetas-guardadas__receta__humedad-malta">${recetasGuardadas.humedadMalta}</td>
                    </tr>`
                    // Incluir en el futuro botones destinados a eliminar y modificar recetas directamente en la table, sin necesidad de indicar el ID.
                    // <td class="recetas-guardadas__receta__modificar"><button class="btn btn-secondary btn-sm">Modificar receta</button></td>
                    // <td class="recetas-guardadas__receta__eliminar"><button class="btn btn-secondary btn-sm">Eliminar receta</button></td>
        recetas.innerHTML += fila;
        numFila += 1;
    })
}

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

    generarTablaDeRecetas();
}

//Permite modificar recetas en el array "recetasGuardadas". Indicar el índice dentro del array.
function modificarReceta() {
    let recetaModificar = parseInt(prompt('Indicar el ID de la receta a modificar')) - 1;
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

    generarTablaDeRecetas();
}

//Permite eliminar recetas en el array "recetasGuardadas". indicar el índice dentro del array.
function eliminarReceta() {
    let recetaEliminar = parseInt(prompt('Indicar el ID de la receta a eliminar')) - 1;
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

    generarTablaDeRecetas();
}

//Muestra en la consola todas las recetas guardadas con un texto genérico describiendo cómo elaborarlas.
function imprimirRecetas() {
    for(let i = 0; i < recetasGuardadas.length; i++) {
        console.log(`Para elaborar ${recetasGuardadas[i].volumen} litros (L) de la cerveza ${recetasGuardadas[i].nombre} con extracto original de ${recetasGuardadas[i].extractoOriginal * 100} ºP, se requiere ${recetasGuardadas[i].cantidadMalta} kg de cebada malteada`);
    }
}