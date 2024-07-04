import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _tagsHistory: string [] = [];

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string){

    tag = tag.toLowerCase();

    // filtrando duplicados
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=> oldTag !== tag)
    }

    // ponemeos primero ne la lista la busqueda repetida
    this._tagsHistory.unshift( tag );
    // fijamos una cantidad de busquedas
    this._tagsHistory= this.tagsHistory.splice(0,10);


  }


  public searchTag( tag:string ):void {

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    console.log(this.tagsHistory);

  }


}
