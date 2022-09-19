import { Actor } from "../models/actor";

export class ActorService {

    createActor(actor: Actor): Actor{
        return null;
    }

    findAllActors(): Array<Actor>{
        return null;
    }

    findActorById(id: number): Actor{
        return null;
    }

    findActorsByName(first_name: string, last_name: string): Array<Actor>{
        return null;
    }

    findActorsByGender(gender: string): Array<Actor>{
        return null;
    }

    updateActor(actor: Actor): Actor{
        return null;
    }

    partialUpdateActor(actor: Partial<Actor>, id: number): Actor{
        return null;
    }

    deleteActor(actor: Actor): boolean{
        return false;
    }

}