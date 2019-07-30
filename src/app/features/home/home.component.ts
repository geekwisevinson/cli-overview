import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geekwise-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public backwards = 'o';

  public animals = [
    'monkey',
    'elephant',
    'dog',
    'cat',
  ];

  public title = 'Home';

  constructor() { }

  ngOnInit() {

    setTimeout( () => {
      this.title = 'Something different';
    }, 3000);
  }

  public updateBGC() {
    return {backgroundColor: 'green'};
  }

}
