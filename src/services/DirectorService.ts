import { Director } from "../models/director";

export class DirectorService {

    createDirector(director: Director): Director{
        return null;
    }

    findAllDirectors(): Array<Director>{
        return null;
    }

    findDirectorById(id: number): Director{
        return null;
    }

    findDirectorsByName(first_name: string, last_name: string): Array<Director>{
        return null;
    }

    updateDirector(director: Director): Director{
        return null;
    }

    partialUpdateDirector(director: Partial<Director>, id: number): Director{
        return null;
    }

    deleteDirector(director: Director): boolean{
        return false;
    }

}