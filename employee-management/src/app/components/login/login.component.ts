import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl (''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  
  onSubmit(): void {
    if (this.LoginForm.valid) {
      this.auth.login(this.LoginForm.value).subscribe(
        (result) => {this.router.navigate (['list-employee'])},
        (err: Error) => {alert (err.message)}
      )
    }
  }
}
