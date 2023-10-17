import { Component, OnInit } from '@angular/core';
import { MyGalleriesService } from '../services/myGalleries.service';
import { Galerie } from '../models/galerie';

@Component({
  selector: 'app-publicGalleries',
  templateUrl: './publicGalleries.component.html',
  styleUrls: ['./publicGalleries.component.css']
})
export class PublicGalleriesComponent implements OnInit {

  listPGallerie?: Galerie[]=[];

  constructor( public galerie:MyGalleriesService) { }

  ngOnInit() {
    this.getPublicGalerie();
  }

  async getPublicGalerie():Promise<void>{
     this.listPGallerie = await this.galerie.getPublicGaleries();

  }


}
