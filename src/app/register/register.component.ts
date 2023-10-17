import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUsername:string="";
  registerEmail:string="";
  registerPassword:string="";
  registerPasswordConfirm:string="";

  constructor(public router : Router, public regist : RegisterService) { }

  ngOnInit() {
  }

  async register(){
    // Aller vers la page de connexion
    this.regist.register(this.registerUsername,this.registerEmail,this.registerPassword,this.registerPasswordConfirm);

    this.router.navigate(['/login']);
  }
}
