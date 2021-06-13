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
    console.log(this.servantForm.value);
  }
}
