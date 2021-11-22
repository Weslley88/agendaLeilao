import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {    
  }

  navigate() {
    this.router.navigate(['/cadastro'])  
  }

  onClickSubmit(data: Login) {


    var loginCadastro = JSON.parse(localStorage.getItem('loginCadastro') || "");
   
    if(loginCadastro ==  ""){
      //ToDo: Exibir mensagem para o usuario solicitando o cadastro
      return;
    }

    if(loginCadastro.email == data.email && loginCadastro.password == data.password){
      this.router.navigate(['home']);
    }

  }
  
}
