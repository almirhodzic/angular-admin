import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  user?: User;
  constructor(
    private authService: AuthService,
    private router: Router
    ){

  }

  ngOnInit(): void {
    this.authService.user().subscribe(
      user => {
        console.log(user);
      },
      err => {
        this.router.navigate(['/login']);
      }
    )
  }
}
