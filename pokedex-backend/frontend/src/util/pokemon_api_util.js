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

export const editPokemon = (data, id) => {
    return fetch(`/api/pokemon/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
};