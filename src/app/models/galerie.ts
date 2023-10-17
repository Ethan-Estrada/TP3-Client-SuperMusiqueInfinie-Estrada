import { Utilisateur } from './utilisateur';
export class Galerie {
  constructor(
    public id:number,
    public name:string,
    public publique:boolean,
    public utilisateurs:Utilisateur[] | null

  ){}
}
