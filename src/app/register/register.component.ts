import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User
  userLogin: UserLogin = new UserLogin
  confirmarSenha:string
  tipoUsuario:string 
 
  
  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event:any) {
    this.tipoUser = event.target.value
  }

  cadastrar(
  ) {
    // this.user.tipo = this.tipoUsuario // Criar atributo tipo nas models e colocar no backend

    if(this.user.senha != this.confirmarSenha)
    {
      alert('As senhas não conferem')
    }
    else{
      this.authService.cadastrar(this.user).subscribe((resp: User)=> {
        this.user = resp
        this.router.navigate(['/entrar']) // Rota da próxima tela que deve ser aberta após o cadastro
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

}
