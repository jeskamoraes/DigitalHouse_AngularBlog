import { Postagem } from "./Postagem"

export class Tema {
    public idTema:number
    public nomeTema:string
    public descricaoTema:string
    public postagem:Postagem[]
}