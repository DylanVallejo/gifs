import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBarBoxComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
