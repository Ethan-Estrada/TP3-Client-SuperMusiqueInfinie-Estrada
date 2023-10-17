import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Galerie } from '../models/galerie';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyGalleriesService {

  domain = "https://localhost:7047/";

  myGalleriesListe: Galerie[] = [];
  myPublicGalleriesListe: Galerie[] = [];


constructor( public http:HttpClient) { }

  async getMyGallerie(): Promise<Galerie[]>{

      let x = await lastValueFrom(this.http.get<Galerie[]>(this.domain +"api/Galeries/GetGaleries"));
      this.myGalleriesListe = x; // ou push
      console.log(x);

      return this.myGalleriesListe;

  }

  async postGallerie(newGalleryName:string,newGalleryIsPublic:boolean): Promise<void>{

    let newGalerie = new Galerie(0,newGalleryName,newGalleryIsPublic,null);

    let x = await lastValueFrom(this.http.post<Galerie>(this.domain+"api/Galeries/PostGalerie",newGalerie));
    console.log(x);
  }

  async getPublicGaleries(): Promise<Galerie[]>{

    let x = await lastValueFrom(this.http.get<Galerie[]>(this.domain +"api/Galeries/GetPublicGaleries"));
    this.myPublicGalleriesListe = x; // ou push
    console.log(x);

    return this.myPublicGalleriesListe;
  }

  async putGalerie(currentGalerieId:number,currentGalerieName:string,currentGalerieState:boolean): Promise<void>{
    let updatedGalerie = new Galerie(currentGalerieId,currentGalerieName,currentGalerieState,null)

    let x = await lastValueFrom(this.http.put<Galerie>(this.domain +"api/Galeries/PutGalerie/"+ currentGalerieId,updatedGalerie));
    console.log(x);
  }

  async deleteGalerie(currentGalerieId:number): Promise<void>{

    let x = await lastValueFrom(this.http.delete<Galerie>(this.domain +"api/Galeries/DeleteGalerie/"+currentGalerieId));
    console.log(x);
  }

}


