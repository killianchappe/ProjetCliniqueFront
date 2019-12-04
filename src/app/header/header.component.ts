import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification/authentification.service';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: String;
  helper = new JwtHelperService();

  constructor(private authentificationService: AuthentificationService,
    private router: Router) { }

  ngOnInit() {
    this.name = this.helper.decodeToken(localStorage.getItem('currentUser'))['sub'];
  }

  logout() {
    Swal.fire({
      title: 'Voulez-vous vraiment vous déconnecter?',
      icon: 'question',
      showCancelButton: true,
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.authentificationService.logout();
        this.router.navigate(['/signin']);
      }
    })
  }

}
