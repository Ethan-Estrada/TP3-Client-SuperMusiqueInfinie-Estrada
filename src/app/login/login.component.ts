import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsername:string="";
  loginPassword:string="";

  constructor(public router : Router,public log : LoginService) { }

  ngOnInit() {
  }

  async login(){
    // Retourner à la page d'accueil
    await this.log.login(this.loginUsername,this.loginPassword);


    this.router.navigate(['/publicGalleries']);
  }

}
