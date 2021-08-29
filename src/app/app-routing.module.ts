import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { HistoryComponent } from './component/history/history.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'favorite', component: FavoriteComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
