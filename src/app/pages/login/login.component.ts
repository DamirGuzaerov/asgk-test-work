import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  ngOnInit() {
    if (!!this.authService.token) {
      this.router.navigate(['/']);
    }
  }
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {

    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    console.log(val)
    if (val.login && val.password) {
      this.authService.login(val.login, val.password)
    }
  }

  validateControl(name: string, validateField: string) {
    let control = this.form.get(name);
    return (control?.touched || control?.dirty) && control?.hasError(validateField);
  }
}
