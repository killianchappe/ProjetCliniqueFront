import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/Medecin';
import { MedecinService } from '../service/medecin/medecin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  listMedecins: Medecin[] = [];

  constructor(private medecinService: MedecinService, private router: Router) { }

  ngOnInit() {
    this.medecinService.getAll().subscribe(data => {
      this.listMedecins = data;
    })
  }

  deleteMedecin(id: number, index) {
    Swal.fire({
      title: 'Voulez-vous vraiment faire cela?',
      icon: 'question',
      showCancelButton: true,
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.medecinService.deleteMedecin(id).subscribe(res => {
          if (res) {
            this.ngOnInit();
            this.router.navigate(['/medecin']);
          } else {
            Swal.fire({
              title: 'Vous ne pouvez pas faire ça : le médecin est affecté à une opération!',
              icon: 'warning',
              confirmButtonText: 'OK',
            })
          }
        })
      }
    })

  }

}
