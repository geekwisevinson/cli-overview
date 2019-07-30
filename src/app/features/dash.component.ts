import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input} from '@angular/core';

@Component({
  selector: 'geekwise-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashComponent implements OnInit {
  @Input() public someProp;
  public title = 'Dash';
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout( () => {
      this.title = 'Something different';
      this.cd.detectChanges();
    }, 3000);
  }

  public updateBGC() {
    console.log('updateBGC Dash');
    return {backgroundColor: 'green'};
  }

}
