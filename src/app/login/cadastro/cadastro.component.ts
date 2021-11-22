import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from "../login.model";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(data: Login) {

    if (localStorage.getItem('loginCadastro') == null){
      localStorage.setItem('loginCadastro', JSON.stringify(data));
    }
    this.router.navigate([''])
  }
}
