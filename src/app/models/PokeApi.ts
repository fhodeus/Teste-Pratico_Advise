import { Pokemon } from "./pokemon";

export interface PokeApi {
    count:number,
    next:string,
    previous:any,
    results:Pokemon[]
}
