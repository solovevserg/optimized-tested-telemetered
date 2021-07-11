import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'qoollo-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {

  constructor() { }

}
