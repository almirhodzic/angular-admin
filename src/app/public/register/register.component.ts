import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {
  }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirm: '',
      });
    }

    submit(): void {
      this.http.post('http://localhost:8000/api/admin/register', this.form.getRawValue())
        .subscribe(() => this.router.navigate(['/login']));
    }
  }
