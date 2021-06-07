import { Component, OnInit } from '@angular/core';
import { UiService } from '../../_services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  onClick() {
    this.showMenu = this.uiService.toggleMenu();
  }
}
