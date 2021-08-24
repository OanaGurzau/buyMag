import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

//testing
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  user?: User;

  constructor(private usersService: UsersService, private authenticationService: AuthenticationService) {
   }

   ngOnInit(): void {
  }



  login(): void {
    console.log('se intra in login')
    try {
     this.authenticationService.login(this.username, this.password).subscribe((user: User) => { 
      console.log('se intra in try')

       this.user = user;


     });
      
    }
    catch(error){
 
    }
   
   }
   

  
// //test
//   users: User[] = []

//   ngOnInit(): void {
//     this.getUsers()
//   }
//   onSubmit(form: NgForm){
//     console.log(form.value)
//   }


//   //testing afisare useri
//   getUsers(): void {
//     this.usersService.getUsers()
//     .subscribe(users => this.users = users);
//   }

}
