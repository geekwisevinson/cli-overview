import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geekwise-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Home';

  constructor() { }

  ngOnInit() {

    setTimeout( () => {
      this.title = 'Something different';
    }, 3000);
  }

  public updateBGC() {
    console.log('updateBGC Home');
    return {backgroundColor: 'green'};
  }

}
