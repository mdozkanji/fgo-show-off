import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
  styleUrls: ['./servants.component.css'],
})
export class ServantsComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('FGO ShowOff | Servants');
  }

  ngOnInit(): void {}
}
