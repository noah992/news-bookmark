import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/state.service';
import NewsDescription from './newsDescription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news:any // news list
  domState = {
    showNewsDescription:false
  }
  newsDescription:any
  favorite:any

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.news = this.state.news
    this.state.updateNews.subscribe(data => {
      this.news = data
    })
    this.favorite = this.state.favorite
  }

  openDescription(e:any, item:any) {
    this.state.updateHistory.next(item)
    this.newsDescription = new NewsDescription(item)
    this.domState.showNewsDescription = true
  }

  closeDescription() {
    this.domState.showNewsDescription = false
  }

  onFavorite(id:number) {
    this.news = this.news.map((item:any) => {
      if (item.id === id) {
        return {...item, isFavorite:true}
      } else {
        return item
      }
    })
    this.favorite = [this.news.find((item:any) => item.id == id), ...this.favorite]
    this.state.updateFavorite.next(this.favorite)
  }

}
