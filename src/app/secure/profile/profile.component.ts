import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
    }

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: ''
    });

    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: ''
    });

    this.authService.user().subscribe(
      user => {
        this.infoForm.patchValue(user);
      }
    )
  }

    infoSubmit(): void {
      this.authService.updateInfo(this.infoForm.getRawValue())
        .subscribe(user => console.log(user));
    }

    passwordSubmit(): void {
      this.authService.updatePassword(this.passwordForm.getRawValue())
        .subscribe(user => console.log(user));
    }
  
}
