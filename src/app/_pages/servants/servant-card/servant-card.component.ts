import { Component, Input, OnInit } from '@angular/core';
import { Servant } from '../../../Servant';

@Component({
  selector: 'app-servant-card',
  templateUrl: './servant-card.component.html',
  styleUrls: ['./servant-card.component.css'],
})
export class ServantCardComponent implements OnInit {
  @Input() servant!: Servant;

  constructor() {}

  ngOnInit(): void {}
}
