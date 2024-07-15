import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBarBoxComponent,
    CardListComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports: [
    HomePageComponent,
    CardListComponent
  ]
})
export class GifsModule { }
