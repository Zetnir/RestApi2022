import { DirectorGenre } from "../models/director_genre";

export class DirectorGenreService {

    createDirectorGenre(directorGenre: DirectorGenre): DirectorGenre{
        return null;
    }

    findAllDirectorsGenres(): Array<DirectorGenre>{
        return null;
    }

    findDirectorGenreById(id: number): DirectorGenre{
        return null;
    }

    findDirectorsGenresByGenre(genre: string): Array<DirectorGenre>{
        return null;
    }

    findDirectorsGenresByMinProb(min_prob: number): Array<DirectorGenre>{
        return null;
    }

    findDirectorsGenresByMaxProb(max_prob: number): Array<DirectorGenre>{
        return null;
    }

    updateDirectorGenre(directorGenre: DirectorGenre): DirectorGenre{
        return null;
    }

    partialUpdateDirectorGenre(directorGenre: Partial<DirectorGenre>, id: number): DirectorGenre{
        return null;
    }

    deleteDirectorGenre(directorGenre: DirectorGenre): boolean{
        return false;
    }

}