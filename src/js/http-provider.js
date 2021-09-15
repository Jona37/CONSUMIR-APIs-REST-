const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);

        if (!resp.ok) {
            throw 'Fallo en la Petición';
        } else {
            const { icon_url, id, value } = await resp.json();
            return { icon_url, id, value };
        }

    } catch (err) {
        throw err;
    }
}

const obtenerUsuarios = async () => {
    try {
        const resp = await fetch(urlUsuarios);

        if (!resp.ok) {
            throw 'Fallo en la Petición';
        } else {
            const { data } = await resp.json();

            return data;
        }
    } catch (err) {
        throw err;
    };
}

export {
    obtenerChiste,
    obtenerUsuarios
}