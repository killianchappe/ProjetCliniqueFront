import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  myForm: FormGroup;

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      loginRegister: ['', Validators.required],
      pwdRegister: ['', Validators.required],
      emailRegister: ['', Validators.required],
    });
  }

  onReset() {
    this.myForm.reset();
  }

  register() {
    this.userService.addUser(this.newUser).subscribe(res => {
      if (res['loginUser'] != null) {
        Swal.fire({
          title: 'Compte créé avec succès!',
          icon: 'success',
          showCancelButton: false,
          focusConfirm: true,
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/signin'])
          }
        })
      } else {
        Swal.fire({
          title: 'Impossible de créer un compte: ce login existe déjà!',
          icon: 'error',
          showCancelButton: false,
          focusConfirm: true,
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/register'])
          }
        })
      }
    });
  }

}
