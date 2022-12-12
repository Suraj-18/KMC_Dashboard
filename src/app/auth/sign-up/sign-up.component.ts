import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  signUpBean:any = {
    username:'',
    password:''
  }

  submit() : void {
    this.auth.registerUser(this.signUpBean).toPromise().then(res => {
      if (res.code == 1) {
        console.log(res.message);
      } else {
        console.log(res.message);
      }
      
    })
  }


}
