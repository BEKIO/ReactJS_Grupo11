import axios from "axios";
import React, { useState, useEffect } from "react";

const apiData = {
    urlBase: "https://jsonplaceholder.typecode.com",
    movies: "/users",
    posts: "/posts",
};

const getMovies = async () => {
    const res = await axios.get(`${apiData.urlBase}${apiData.movies}`);
    return res.data;
}

const movieAdapter = (data) => {
    const movies = data.map((movie) => {
        return {
            id: movie.id,
            name: movie.name,
            email: movie.email,
            website: movie.website,
        };
    });
    return movies;
};

const moviesServices = {
    getMovies: async (provider) => {
        const data = await provider();
        return data;
    },
    addMovie: async (provider, movie) => {
        const data = await provider(movie);
        return data;
    }
}
    
const moviesUseCase = {
    getMovies: async () => {
        const data = await moviesServices.getMovies(getMovies);
        const movies = movieAdapter(data);
        console.log(movies);
        return movies;
    },
}


export default function CardPrueba(){

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]); 


    const getMovies = async () => {
        setIsLoading(true);

        try {
           const data = await moviesUseCase.getMovies();
            setMovies(data);
        } catch (error) {
            setError("Error en la carga");
        } finally {
            setIsLoading(false);
        } 
    };

    useEffect(() => {
        getMovies();
    }, []);

    return( 
        <div>
            <h1>Movies</h1>
            {isLoading && <p>Cargando...</p>}
            <img src={movies.website} alt="not found" />
            <h1>{movies.name}</h1>

        </div>
        
    )
};
