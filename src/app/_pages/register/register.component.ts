import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  profileForm = this.fb.group({
    username: ['', Validators.required],
    ign: ['', Validators.required],
    friendId: this.fb.group({
      _1: ['', Validators.pattern('[0-9]{3}')],
      _2: ['', Validators.pattern('[0-9]{3}')],
      _3: ['', Validators.pattern('[0-9]{3}')],
    }),
    showId: [false],
    password: ['', Validators.required],
  });

  constructor(private titleService: Title, private fb: FormBuilder) {
    this.titleService.setTitle('FGO ShowOff | Register');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.profileForm.value);
  }
}
