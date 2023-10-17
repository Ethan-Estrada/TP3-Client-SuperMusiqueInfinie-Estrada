import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  logout(){
    localStorage.removeItem("token");
    console.log("deco reussie!");
    window.location.reload();
  }

}
