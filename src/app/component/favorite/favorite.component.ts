import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/state.service';
import NewsDescription from '../home/newsDescription';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorite:any
  domState = {
    showNewsDescription:false
  }
  newsDescription:any

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.favorite = this.state.favorite
    this.state.updateFavorite.subscribe(data => {
      this.favorite = data
    })
  }

  openDescription(e:any, item:any) {
    this.state.updateHistory.next(item)
    this.newsDescription = new NewsDescription(item)
    this.domState.showNewsDescription = true
  }

  removeFavorite(id:number) {
    this.favorite = this.favorite.map((item:any) => {
      if (item.id === id) {
        return {isFavorite:false, ...item}
      } else {
        return item
      }
    }).filter((item:any) => item.id !== id)
    this.state.updateFavorite.next(this.favorite)
  }

  closeDescription() {
    this.domState.showNewsDescription = false
  }

}
