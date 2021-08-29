import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { NewsDescriptionPipe } from '../shared/pipe/news-description.pipe';



@NgModule({
  declarations: [
    HistoryComponent,
    FavoriteComponent,
    HomeComponent,
    NewsDescriptionPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
