

export const getMovies = async () => {
    console.log("Heloo");
    try {
        const respMovies = await fetch('http://localhost:8083/api/movies/get-movies', {method: 'GET', headers: {'Content-Type': 'application/json'}});
        const data = await respMovies.json();
        return data.data;
    }catch(err) {
        console.log(err);
    }
};
export const updateMovie = async (payload) => {
    try {
        const response = await fetch("http://localhost:8083/api/movies/update-movie", {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload)});
        return await response.json();
    }catch(err) {
        console.log(err);
    }
};
export const deleteMovie = async (payload) => {
    try {
        const response = await fetch(`http://localhost:8083/api/movies/delete-movie/${payload.movieId}`, {method: "DELETE", header: {"Content-Type": "application/json"}});
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
};
export const addMovie = async (payload) => {
    console.log(payload);
    try {
        const response = await fetch('http://localhost:8083/api/movies/add-movie', {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload)});
        return await response.json();
    }catch(err) {
        console.log(err);
    }
};