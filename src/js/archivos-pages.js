import { subirImagen } from "./archivos-provider";

const body = document.body;
let inputFile, imgFoto;

const crearImputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Subir Archivos</h1>
        <hr />

        <label>Selecciona una fotografía</label>
        <input type="file" accept="image/png, image/jpeg"/>
        
        <br>
        <img id="foto" class="img-thumbnail"  src="">
    `;

    const divImagen = document.createElement('div');
    divImagen.innerHTML = html;

    body.append(divImagen);


    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];

        //console.log(file);

        subirImagen(file).then(url => {
            imgFoto.src = url;
        });
    });
}

export const init = () => {
    crearImputFileHtml();
    eventos();
}
