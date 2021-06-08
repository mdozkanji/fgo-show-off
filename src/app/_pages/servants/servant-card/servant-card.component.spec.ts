import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServantCardComponent } from './servant-card.component';

describe('ServantCardComponent', () => {
  let component: ServantCardComponent;
  let fixture: ComponentFixture<ServantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServantCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
