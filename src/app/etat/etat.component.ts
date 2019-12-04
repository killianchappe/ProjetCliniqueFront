import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Etat } from '../models/Etat';
import { EtatService } from '../service/etat/etat.service';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {

  listEtats: Etat[] = [];

  constructor(private etatService: EtatService,
    private router: Router) { }

  ngOnInit() {
    this.etatService.getAll().subscribe(data => {
      this.listEtats = data;
    })
  }

  deleteEtat(id: number, index) {
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
        this.etatService.deleteEtat(id).subscribe(res => {
          if (res) {
            this.ngOnInit();
            this.router.navigate(['/etat']);
          } else {
            Swal.fire({
              title: 'Vous ne pouvez pas faire ça : un patient est dans cet état!',
              icon: 'warning',
              confirmButtonText: 'OK',
            })
          }
        })
        
      }
    })

  }

}
