import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @Input() error: string | null | undefined;
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router:Router,private authSvc:AuthService){

  }
  ngOnInit(): void {
   
  }

  submit() {
    try {
      if (this.form.valid) {
        console.log(this.form.value);  
        this.authSvc.setLoginData(true);
        this.router.navigate(['/dashboard'])
      }
    } catch (error) {
      
    }
  }

}
