import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//testing
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
//test
  users: User[] = []
  constructor(private usersService: UsersService) {
   }

  ngOnInit(): void {
    this.getUsers()
  }
  onSubmit(form: NgForm){
    console.log(form.value)
  }


  //testing afisare useri
  getUsers(): void {
    this.usersService.getUsers()
    .subscribe(users => this.users = users);
  }

}
