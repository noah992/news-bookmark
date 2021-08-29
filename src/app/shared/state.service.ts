import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  key = 'd117903dc6ac45f2a2c6394cf8bf0593'
  url = 'https://newsapi.org/v2/everything?' + 'q=Apple&' + 'from=2021-08-27&' + 'sortBy=popularity&' + 'apiKey='+this.key;
  
  news:any = []
  updateNews = new Subject()
  history:any = []
  updateHistory = new Subject()
  favorite:any = []
  updateFavorite = new Subject()
  newsId = 200

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(data => {
      this.news = data
      this.news = this.news.articles.map((item:any) => {
        return {id:this.newsId++, ...item}
      })
      this.updateNews.next(this.news)
    })
    this.updateHistory.subscribe(data => {
      this.history = [data, ...this.history]
    })
    this.updateFavorite.subscribe(data => {
      this.favorite = data
    })
  }
}
