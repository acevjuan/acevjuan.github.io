function crearReceta() {
    let nombreCerveza = prompt('Indicar el nombre de la cerveza a crear');
    let eo = parseFloat(prompt('¿Cuánto es el extracto original deseado?'));
    let vol = parseFloat(prompt('¿Cuántos litros de cerveza quieres elaborar?'));
    let extMal = parseFloat(prompt('¿Cuál es el extracto de la malta a utilizar?'));
    let hMal = parseFloat(prompt('¿Cuál es la humedad de la malta?'));

    //Calculo de gravedad específica.
    let sg = ((eo * 4)/1000) + 1

    //Cálculo de cantidad de malta necesaria para la receta.
    let cantMal = (vol * sg * densidadAgua * eo) / (extMal * (1 - hMal) * eficiencia);

    recetasGuardadas.push(new Recetas(nombreCerveza, eo, vol, cantMal, extMal, hMal));

    alert('Receta creada con éxito.');

    console.table(recetasGuardadas);
}

//Crear función que modifique recetas creadas. Usar como criterio de busqueda un condicional que pregunta si es por id o por nombre de la receta.

//Crear función que elimine recetas creadas. Usar como criterio de busqueda un condicional que pregunta si es por id o por nombre de la receta.

//Crear función que describa de forma genérica cómo hacer la receta con una iteración a todos los elementos del objeto.