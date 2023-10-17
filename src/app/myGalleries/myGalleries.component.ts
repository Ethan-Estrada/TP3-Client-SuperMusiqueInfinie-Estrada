import { Component, OnInit } from '@angular/core';
import { MyGalleriesService } from '../services/myGalleries.service';
import { Galerie } from '../models/galerie';

@Component({
  selector: 'app-myGalleries',
  templateUrl: './myGalleries.component.html',
  styleUrls: ['./myGalleries.component.css']
})
export class MyGalleriesComponent implements OnInit {

  listGallerie?: Galerie[]=[];
  newGalleryName:string="";
  showGalerieName:string="";
  newGalleryIsPublic:boolean=false;
  public selectedItem:any = {};

  oldGalerieId?:number;
  oldGalerieName:string="";
  oldGalerieState?:boolean;

  constructor(public gallerie:MyGalleriesService) { }

  ngOnInit() {
    this.getGalerie();

  }

  async getGalerie(): Promise<void>{
    this.listGallerie = await this.gallerie.getMyGallerie();

  }

  async postGalerie(): Promise<void>{
    await this.gallerie.postGallerie(this.newGalleryName,this.newGalleryIsPublic);
    window.location.reload();
  }

  async putGaleriePrivate() : Promise<void>{
    await this.gallerie.putGalerie(this.oldGalerieId!,this.oldGalerieName,false);
    window.location.reload();
  }

  async putGaleriePublic() : Promise<void>{
    await this.gallerie.putGalerie(this.oldGalerieId!,this.oldGalerieName,true);
    window.location.reload();
  }

  async deleteGalerie():Promise<void>{
    await this.gallerie.deleteGalerie(this.oldGalerieId!);
    window.location.reload();

  }

  getInfoGalerie( galerieId:number,galerieName:string,galeriePublic:boolean){
    this.oldGalerieId = galerieId;
    this.oldGalerieName = galerieName;
    this.oldGalerieState = galeriePublic;

    this.showGalerieName = galerieName;
  }

  setItem(gal: any){
    this.selectedItem = gal
  }

}
