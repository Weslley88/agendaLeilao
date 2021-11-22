import { SaleService } from './home/sale.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,    
    RouterModule.forRoot([
      { path:'',component:LoginComponent },
      { path:'cadastro',component:CadastroComponent },
      { path:'home',component:HomeComponent },
    ]),    
  ],
  
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
