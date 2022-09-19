import { MovieGenre } from "../models/movie_genre";

export class MovieGenreService {

    createMovieGenre(movieDirector: MovieGenre): MovieGenre{
        return null;
    }

    findAllMoviesGenres(): Array<MovieGenre>{
        return null;
    }

    findMoviesGenresById(id: number): MovieGenre{
        return null;
    }

    findMoviesGenresByGenre(genre: string): Array<MovieGenre>{
        return null;
    }

    updateMovieGenre(movieGenre: MovieGenre): MovieGenre{
        return null;
    }

    partialUpdateMovieGenre(movieGenre: MovieGenre, id: number): MovieGenre{
        return null;
    }

    deleteMovieGenre(movieGenre: MovieGenre): boolean{
        return false;
    }

}