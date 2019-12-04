import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Patient } from '../models/Patient';
import { PatientService } from '../service/patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  listPatients: Patient[] = [];

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.patientService.getAll().subscribe(data => {
      this.listPatients = data;
    })
  }

  deletePatient(id: number, index) {
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
        this.patientService.deletePatient(id).subscribe(res => {
          if (res) {
            this.ngOnInit();
            this.router.navigate(['/patient']);
          } else {
            Swal.fire({
              title: 'Vous ne pouvez pas faire ça : ce patient à une opération de prévu!',
              icon: 'warning',
              confirmButtonText: 'OK',
            })
          }
        })
      }
    })

  }

}
