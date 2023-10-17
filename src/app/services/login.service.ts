import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/loginDTO';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  domain = "https://localhost:7047/";


constructor(public http:HttpClient) { }

  async login(loginUsername:string,loginPassword:string) : Promise<void>{

    let loginDTO = new LoginDTO(loginUsername,loginPassword);
    let x = await lastValueFrom(this.http.post<any>(this.domain+"api/User/Login",loginDTO));
    console.log(x);
    localStorage.setItem("token", x.token);
  }

}
