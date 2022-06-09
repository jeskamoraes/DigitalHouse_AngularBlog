import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // No menu do professor aparecem o nome e foto do user logado
  // Informações serão carregadas quando o usuário logar
  nome = environment.nome
  foto = environment.foto

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  sair() {
    // Redirecionando para a página de login
    this.router.navigate(['/entrar']) 

    // Zerando todos os atributos do usuário que deslogou
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }
}
