//Para mostrar al abrir el navegador cuáles recetas están almacenadas en ese momento.
console.table(recetasGuardadas);

const recetas = document.querySelector('.recetas-guardadas');

const guiaExtractos = document.querySelector('.guia-extractos');

generarTablaDeRecetas();

fetch('bbdd/guia-extracto-original.json')
    .then((response) => response.json())
    .then((data)=> {
        guiaExtractos.innerHTML = ""; 
        let encabezadoGuia = document.createElement('thead');
        encabezadoGuia.innerHTML = `
        <tr class="guia-extractos__encabezado">
            <th class="recetas-guardadas__encabezado__index">ID</th>
            <th class="recetas-guardadas__encabezado__nombre">ESTILO</th>
            <th class="recetas-guardadas__encabezado__extracto-original">EXTRACTO ORIGINAL MÍNIMO, ºP</th>
            <th class="recetas-guardadas__encabezado__extracto-original">EXTRACTO ORIGINAL MÁXIMO, ºP</th>
        </tr> `
        guiaExtractos.appendChild(encabezadoGuia);
        data.forEach(est => {
            container = document.createElement('tbody');
            container.innerHTML = `
                <tr class="guia-extractos__estilo">
                    <td class="guia-extractos__estilo__id">${est.id}</td>
                    <td class="guia-extractos__estilo__nombre">${est.nombreEstilo}</td>
                    <td class="guia-extractos__estilo__ext-min">${est.extractoOriginalMin}</td>
                    <td class="guia-extractos__estilo__ext-max">${est.extractoOriginalMax}</td>
                </tr> `
            guiaExtractos.appendChild(container);
        })
    })
    .catch((error) => console.error('ERROR', error))