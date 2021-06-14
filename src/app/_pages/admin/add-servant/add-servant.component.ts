import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServantService } from '../../../_services/servant.service';
import { Servant } from '../../../Servant';

@Component({
  selector: 'app-add-servant',
  templateUrl: './add-servant.component.html',
  styleUrls: ['./add-servant.component.css'],
})
export class AddServantComponent implements OnInit {
  servants: Servant[] = [];

  servantForm = this.fb.group({
    id: ['', Validators.pattern('[0-9]{3}')],
    name: ['', Validators.required],
    class: ['', Validators.required],
    rarity: ['', Validators.required],
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

    this.servantService
      .addServant(newServant)
      .subscribe((newServant) => this.servants.push(newServant));

    this.servantForm.get('id')?.setValue('');
    this.servantForm.get('name')?.setValue('');
    this.servantForm.get('class')?.setValue('');
    this.servantForm.get('rarity')?.setValue('');
  }
}
