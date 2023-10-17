import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterDTO } from '../models/registerDTO';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  domain = "https://localhost:7047/";

constructor( public http: HttpClient) { }

async register(registerUsername: string, registerEmail:string,registerPassword:string,registerPasswordConfirm:string) : Promise<void>{
  let registerDTO = new RegisterDTO(
    registerUsername,
    registerEmail,
    registerPassword,
    registerPasswordConfirm);

    let x = await lastValueFrom(this.http.post<RegisterDTO>(this.domain+"api/User/Register",registerDTO));
    console.log(x);
}

}
