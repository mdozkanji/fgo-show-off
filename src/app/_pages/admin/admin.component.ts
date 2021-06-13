import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServantService } from '../../_services/servant.service';
import { Servant } from '../../Servant';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  servants: Servant[] = [];

  constructor(
    private titleService: Title,
    private servantService: ServantService
  ) {
    this.titleService.setTitle('FGO ShowOff | Admin Dashboard');
  }

  ngOnInit(): void {
    this.servantService
      .getServants()
      .subscribe((servants) => (this.servants = servants));
  }
}
