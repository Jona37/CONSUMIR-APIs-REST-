import { obtenerChiste } from "./http-provider";

//1. Referencias al html
const body = document.body;
let btnOtroChiste, olChiste;

//2. Se Crea el Cascaron del sitio
const crearChisteHtml = () => {
    const html = `
    <h1 class="mt-5">Ejemplo Consumo de APIs</h1>
    <hr>

    <button class="btn btn-primary">Otro Chiste</button>

    <ol class="mt-2 list-group">
        
    </ol>
    `;
    //1. Se crea el elemento
    const divChistes = document.createElement('div');
    
    //2. Al elemento creado se le inserta el html
    divChistes.innerHTML = html;


    //3. Se inserta el elemento en el body
    body.append(divChistes);
}

//2. Creo los elementos dinamicos
const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b> ${chiste.value}`;
    olItem.classList.add('list-group-item');

    btnOtroChiste.disabled = true;

    olChiste.append(olItem);

    btnOtroChiste.disabled = false;
}

//3. Creo los eventos del programa
const eventos = () => {

    //1. Creo la referencia al html
    btnOtroChiste = document.querySelector('button');
    olChiste = document.querySelector('ol');

    //2. Doy accion al boton y ejecuto la promesa
    btnOtroChiste.addEventListener('click', async() => {
        dibujarChiste(await obtenerChiste());
    });
}



//4. Se crea la centralizacion de lo que se hara en el html
//Esto permite que en el index no se importe mucha logica
const init = () => {
    crearChisteHtml();
    eventos();
}

export{
    init
}