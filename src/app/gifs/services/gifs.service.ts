import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifsList: Gif[] = [];
  private _tagsHistory: string [] = [];
  private apiKey:          string = '0HL5FAzflVcb6j5DAKxknSXwhkCpU45z';
  private serviceUrl:string       = 'https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) {
    this.loadLocalStorage()
  }

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
    //guardadndo en localstorage
    this.saveLocalStorage();

  }

  private saveLocalStorage():void {
    localStorage.setItem("storageHistory" , JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem("storageHistory")) return;

    // debemos usar el not null assertion
    this._tagsHistory =  JSON.parse(localStorage.getItem("storageHistory")!);
    if(this._tagsHistory.length === 0) return;
    this.searchTag( this._tagsHistory[0] );

  }

  searchTag( tag:string ):void {

    if(tag.length === 0) return;

    this.organizeHistory(tag);


    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '5')
    .set('q', tag)


    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
    .subscribe(  response => {

      this.gifsList = response.data;

    })

  }


}
