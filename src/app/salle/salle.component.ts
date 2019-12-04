import { Component, OnInit } from '@angular/core';
import { Salle } from "../models/Salle";
import { SalleServiceService } from "../service/salle/salle-service.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  listSalles: Salle[] = [];

  constructor(private salleService: SalleServiceService, private router: Router) { }

  ngOnInit() {
    this.salleService.getAll().subscribe(data => {
      this.listSalles = data;
    })
  }

  deleteSalle(id: number, index) {
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
        this.salleService.deleteSalle(id).subscribe(res => {
          if (res) {
            this.ngOnInit();
            this.router.navigate(['/salle']);
          } else {
            Swal.fire({
              title: 'Vous ne pouvez pas faire ça : une opération doit se dérouler dans cette salle!',
              icon: 'warning',
              confirmButtonText: 'OK',
            })
          }
        })
      }
    })

  }

}