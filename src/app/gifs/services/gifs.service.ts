import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _tagsHistory: string [] = [];


  private apiKey:string = '0HL5FAzflVcb6j5DAKxknSXwhkCpU45z';

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string){

    tag = tag.toLowerCase();

    // filtrando duplicados
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    // ponemeos primero ne la lista la busqueda repetida
    this._tagsHistory.unshift( tag );
    // fijamos una cantidad de busquedas
    this._tagsHistory= this.tagsHistory.splice(0,10);


  }


  async searchTag( tag:string ):Promise<void> {

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const resp = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=0HL5FAzflVcb6j5DAKxknSXwhkCpU45z&q=dota&limit=5')
    const data = resp.json();
    console.log(data)

  }


}
