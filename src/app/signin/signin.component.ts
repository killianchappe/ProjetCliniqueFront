import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../service/user/user.service';
import { AuthentificationService } from '../service/authentification/authentification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  newUser: User = new User();
  myForm: FormGroup;

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService) {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['']);
    };
  }

  ngOnInit() {

    this.myForm = this.formBuilder.group({
      loginSignin: ['', Validators.required],
      pwdSignin: ['', Validators.required],
    });
  }

  onReset() {
    this.myForm.reset();
  }

  signIn() {
    console.log(this.newUser.loginUser);
    console.log(this.newUser.pwdUser);
    this.authentificationService.login(this.newUser.loginUser, this.newUser.pwdUser);

    // this.userService.findByLoginAndPwd(this.newUser).subscribe(res => {
    //   if (res['loginUser'] != null) {
    //     Swal.fire({
    //       title: 'Connecté!',
    //       icon: 'success',
    //       showCancelButton: false,
    //       focusConfirm: true,
    //       confirmButtonText: 'OK',
    //     }).then((result) => {
    //       if (result.value) {
    //         this.router.navigate([''])
    //       }
    //     })
    //   } else {
    //     Swal.fire({
    //       title: 'Login ou mot de passe introuvable, veuillez essayer à nouveau.',
    //       icon: 'error',
    //       showCancelButton: false,
    //       focusConfirm: true,
    //       confirmButtonText: 'OK',
    //     }).then((result) => {
    //       if (result.value) {
    //         this.myForm.reset();
    //         this.router.navigate(['/signin'])
    //       }
    //     })
    //   }
    // });

  }

}