import { User } from './User';
import { Tema } from './Tema';
import { Data } from "popper.js"

export class Postagem {
    public id: number
    public titulo: string
    public texto: string
    public date: Data
    public Tema: Tema
    public Usuario: User
}