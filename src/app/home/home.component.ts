import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // if(environment.token == '') {
    //   alert('Sua sessão encerrou! Faça o login novamente.')
    // }
    this.router.navigate(['/entrar'])
  }

}
