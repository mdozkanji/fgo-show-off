import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServantService } from '../../../_services/servant.service';
import { Servant } from '../../../Servant';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
  styleUrls: ['./servants.component.css'],
})
export class ServantsComponent implements OnInit {
  servants: Servant[] = [];

  constructor(
    private titleService: Title,
    private servantService: ServantService
  ) {
    this.titleService.setTitle('FGO ShowOff | Servants');
  }

  ngOnInit(): void {
    this.servantService
      .getServants()
      .subscribe((servants) => (this.servants = servants));
  }
}
