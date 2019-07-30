import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnDestroy} from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'geekwise-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashComponent implements OnInit, OnDestroy {
  @Input() public someProp;
  public title = 'Dash';
  public user: User;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout( () => {
      this.title = 'Something different';
      this.cd.detectChanges();
    }, 3000);
  }
  ngOnDestroy(): void {
    this.cd.detach();
  }

  public updateBGC() {
    console.log('updateBGC Dash');
    return {backgroundColor: 'green'};
  }
  public createUser() {
    this.user = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      age: 32,
      address: {
        city: '', state: ''
      }
    };
  }

}
