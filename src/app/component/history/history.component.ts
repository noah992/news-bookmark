import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history:any = []

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.history = this.state.history
    this.state.updateHistory.subscribe(data => {
      this.history = [data, ...this.history]
    })
  }

}
