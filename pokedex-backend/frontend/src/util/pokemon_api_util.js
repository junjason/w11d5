export const postPokemon = data => {
    return fetch('/api/pokemon', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
};

export const putPokemon = (data, id) => {
    debugger
    console.log(data);
    console.log(id);
    return fetch(`/api/pokemon/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
};