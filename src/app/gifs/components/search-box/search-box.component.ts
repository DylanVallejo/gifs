import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs.."
    (keyup.enter)="searchTag( )"
    #txtTagInput
    >

  `
})

export class SearchBarBoxComponent {


  // view chiod nos sirve para tomar referencias locales un valor
  //  view children toma todos los inpust html arreglo
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(){}

  // searchTag(newTag : string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag})
  }

}
