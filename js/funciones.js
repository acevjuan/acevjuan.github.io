//Guarda la información generada en la creación, modificación o eliminación de recetas en el Local Storage
//"guardarLocal" se ejecuta dentro de las demás funciones cada vez que exista alguna modificación en el array "recetasGuardadas"
function guardarLocal(clave, valor) { 
    localStorage.setItem(clave, valor);
}

//Genera tabla para visualizar en aplicación
//generarTablaDeRecteas se ejecuta dentro de las demás funciones cada vez que exista alguna modificación en el array "recetasGuardadas"
function generarTablaDeRecetas() {

    recetas.innerHTML = ""; 

    let encabezadoRecetas = document.createElement('thead');
    encabezadoRecetas.innerHTML = `
            <tr class="recetas-guardadas__encabezado">
                <th class="recetas-guardadas__encabezado__index">ID</th>
                <th class="recetas-guardadas__encabezado__nombre">NOMBRE</th>
                <th class="recetas-guardadas__encabezado__extracto-original">EXTRACTO ORIGINAL, ºP</th>
                <th class="recetas-guardadas__encabezado__volumen">VOLUMEN, L</th>
                <th class="recetas-guardadas__encabezado__cantidad-malta">CANTIDAD DE MALTA, kg</th>
                <th class="recetas-guardadas__encabezado__extracto-malta">EXTRACTO DE MALTA, %</th>
                <th class="recetas-guardadas__encabezado__humedad-malta">HUMEDAD DE MALTA, %</th>
                <th></th>
            </tr> `
    
    recetas.appendChild(encabezadoRecetas);

    recetasGuardadas.forEach((rec, index) => {
        let container = document.createElement('tbody');
        let numFila = index + 1;
        container.innerHTML  = `
                <tr id="receta-${numFila}" class="recetas-guardadas__receta">
                    <td class="recetas-guardadas__receta__index">${numFila}</td>
                    <td class="recetas-guardadas__receta__nombre">${rec.nombre}</td>
                    <td class="recetas-guardadas__receta__extracto-original">${rec.extractoOriginal}</td>
                    <td class="recetas-guardadas__receta__volumen">${rec.volumen}</td>
                    <td class="recetas-guardadas__receta__cantidad-malta">${rec.cantidadMalta}</td>
                    <td class="recetas-guardadas__receta__extracto-malta">${rec.extractoMalta}</td>
                    <td class="recetas-guardadas__receta__humedad-malta">${rec.humedadMalta}</td>
                    <td><button id="btn-eli-${numFila}" value="${numFila}" class="btn btn-secondary btn-sm">Eliminar</button></td>
                </tr>`
        recetas.appendChild(container);

        const btnEliminar = document.querySelector(`#btn-eli-${numFila}`);
        btnEliminar.addEventListener('click', () => {
            eliminarReceta(index)
        })

    })
}

//Realiza el cálculo de cebada malteada requerida para la receta deseada por el usuario y guarda la misma dentro del array "recetasGuardadas".
function crearReceta() {
    //Obtención de datos ingresados por el usuario para el cálculo de receta
    let nombreCerveza = document.querySelector('#nombre').value;
    let eo = document.querySelector('#extracto').value / 100;
    let vol = document.querySelector('#volumen').value;
    let extMal = document.querySelector('#ext-mal').value / 100;
    let hMal = document.querySelector('#humedad').value / 100;

    //Calculo de gravedad específica.
    let sg = ((eo * 4)/1000) + 1

    //Cálculo de cantidad de malta necesaria para la receta (kilogramos).
    let cantMal = Math.round((vol * sg * densidadAgua * eo) / (extMal * (1 - hMal) * eficiencia));

    //Inclusión de receta calculada dentro del array principal "recetasGuardadas"
    recetasGuardadas.push(new Recetas(nombreCerveza, eo * 100, vol, cantMal, extMal * 100, hMal * 100));

    //Alerta/notificación de proceso de creación de receta exitoso.
    Swal.fire('Receta creada con éxtito')

    //Visualización en consola array. Opcional para el funcionamiento de la aplicación, utilizado para debugging.
    console.table(recetasGuardadas);

    //Almacenar nueva receta/array modificado en el local storage.
    guardarLocal('listadoRecetas', JSON.stringify(recetasGuardadas));

    //Visualizar nueva receta/array modificado en la aplicación.
    generarTablaDeRecetas();

    //Resetear información en el formulario de creación de receta.
    document.querySelector('#nombre').value = '';
    document.querySelector('#extracto').value = '';
    document.querySelector('#volumen').value = '';
    document.querySelector('#ext-mal').value = '';
    document.querySelector('#humedad').value = '';
}

//Permite eliminar recetas en el array "recetasGuardadas". Se agrega como evento a su botón de eliminar correspondiente.
//Se plantea la función de esta manera para cumplir con el criterio de evaluación que requiere incluir operadores avanzados, en este caso el operador lógico AND (&&). Originalmente, se usaba un condicional "if" común.
function eliminarReceta(recetaEliminar) {
    const eliminacion = () => {
        localStorage.removeItem('listadoRecetas');
        recetasGuardadas.splice(recetaEliminar, 1);
        guardarLocal('listadoRecetas', JSON.stringify(recetasGuardadas));
        Swal.fire('Receta eliminada con éxito');
        generarTablaDeRecetas()
    }
    Swal.fire({
        title: '¿Estás seguro de que quieres eliminar la receta?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#765664',
        cancelButtonColor: '#765664',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        //Inclusión de operador lógico AND para dar cumplimiento a los requerimientos de la entrega final.
        result.isConfirmed === true && eliminacion();
    })
}

//Muestra en la consola todas las recetas guardadas con un texto genérico describiendo cómo elaborarlas. Utilizado para desafío de iteraciones, se deja en proyecto final en caso de requerir el uso de "for".
function imprimirRecetas() {
    for(let i = 0; i < recetasGuardadas.length; i++) {
        console.log(`Para elaborar ${recetasGuardadas[i].volumen} litros (L) de la cerveza ${recetasGuardadas[i].nombre} con extracto original de ${recetasGuardadas[i].extractoOriginal * 100} ºP, se requiere ${recetasGuardadas[i].cantidadMalta} kg de cebada malteada`);
    }
}