import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../_services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;

  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.showMenu = this.uiService.toggleMenu();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
