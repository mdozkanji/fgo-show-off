import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private titleService: Title, private fb: FormBuilder) {
    this.titleService.setTitle('FGO ShowOff | Login');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.profileForm.value);
  }
}
