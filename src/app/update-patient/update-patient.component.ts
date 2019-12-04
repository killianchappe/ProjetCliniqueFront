import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../models/Patient';
import { PatientService } from '../service/patient/patient.service';
import { Etat } from '../models/Etat';
import { EtatService } from '../service/etat/etat.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  idCourant: number;
  patientCourant: Patient = new Patient();
  myForm: FormGroup;
  listEtats: Etat[] = [];

  constructor(private etatService: EtatService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private patientService: PatientService) { }

  ngOnInit() {
    this.idCourant = parseInt(this.route.snapshot.paramMap.get('id'));
    this.patientService.getOne(this.idCourant).subscribe(data => {
      this.patientCourant = data;
      this.etatService.getAll().subscribe(data => {
        this.listEtats = data;
      })
    });
    
    this.myForm = this.formBuilder.group({
      nomPatient: ['', Validators.required],
      prenomPatient: ['', Validators.required],
      dossierPatient: ['', Validators.required],
      etatPatient: ['', Validators.required]
    });
  }

  onReset() {
    this.myForm.reset();
  }

  updatePatient(patient: Patient) {
    this.patientService.updatePatient(patient, this.idCourant).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Modification effectuée!',
          icon: 'success',
          showCancelButton: true,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: 'Voir la liste',
          cancelButtonText: 'Modifier à nouveau'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/patient'])
          }
        })
      }
    });
  }

  byIdEtat(e1: Etat, e2: Etat) {
    return e1['idEtat'] === e2['idEtat'];
  }

}