import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Patient } from '../models/Patient';
import { PatientService } from '../service/patient/patient.service';
import { Etat } from '../models/Etat';
import { EtatService } from '../service/etat/etat.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  newPatient: Patient = new Patient();
  listEtats: Etat[] = [];
  myForm: FormGroup;

  constructor(private patientService: PatientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private etatService: EtatService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nomPatient: ['', Validators.required],
      prenomPatient: ['', Validators.required],
      dossierPatient: ['', Validators.required],
      etatPatient: ['', Validators.required]
    });
    this.etatService.getAll().subscribe(data => {
      this.listEtats = data;
    });
  }

  onReset() {
    this.myForm.reset();
  }

  ajoutPatient() {
    this.patientService.addPatient(this.newPatient).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Patient ajouté!',
          icon: 'success',
          showCancelButton: true,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: 'Voir la liste',
          cancelButtonText: 'Ajouter un autre patient'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/patient'])
          }
        })
      }
    });
  }

}
