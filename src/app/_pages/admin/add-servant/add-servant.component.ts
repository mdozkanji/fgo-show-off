import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServantService } from '../../../_services/servant.service';
import { Servant } from '../../../Servant';

@Component({
  selector: 'app-add-servant',
  templateUrl: './add-servant.component.html',
  styleUrls: ['./add-servant.component.css'],
})
export class AddServantComponent implements OnInit {
  @Output() onAddServant: EventEmitter<Servant> = new EventEmitter();

  servants: Servant[] = [];

  servantForm = this.fb.group({
    id: ['', Validators.pattern('[0-9]{3}')],
    name: ['', Validators.required],
    class: ['', Validators.required],
    rarity: ['', Validators.pattern('[0-5]')],
  });

  constructor(
    private servantService: ServantService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const newServant = {
      id: this.servantForm.get('id')?.value,
      name: this.servantForm.get('name')?.value,
      class: this.servantForm.get('class')?.value,
      rarity: this.servantForm.get('rarity')?.value,
    };

    this.onAddServant.emit(newServant);

    this.servantForm.get('id')?.setValue('');
    this.servantForm.get('name')?.setValue('');
    this.servantForm.get('class')?.setValue('');
    this.servantForm.get('rarity')?.setValue('');
  }
}
