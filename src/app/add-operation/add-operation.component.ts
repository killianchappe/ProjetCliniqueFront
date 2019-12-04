import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Operation } from '../models/Operation';
import { OperationService } from '../service/operation/operation.service';
import { Medecin } from '../models/Medecin';
import { MedecinService } from '../service/medecin/medecin.service';
import { Salle } from '../models/Salle';
import { SalleServiceService } from '../service/salle/salle-service.service';
import { Patient } from '../models/Patient';
import { PatientService } from '../service/patient/patient.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})
export class AddOperationComponent implements OnInit {

  myForm: FormGroup;
  listPatients: Patient[] = [];
  listMedecins: Medecin[] = [];
  listSalles: Salle[] = [];
  newOperation: Operation = new Operation();

  constructor(private patientService: PatientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private operationService: OperationService,
    private medecinService: MedecinService,
    private salleService: SalleServiceService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      dateOperation: ['', Validators.required],
      patientOperation: ['', Validators.required],
      medecinOperation: ['', Validators.required],
      salleOperation: ['', Validators.required]
    });
    this.patientService.getAll().subscribe(data => {
      this.listPatients = data;
    });
    this.medecinService.getAll().subscribe(data => {
      this.listMedecins = data;
    });
    this.salleService.getAll().subscribe(data => {
      this.listSalles = data;
    });
  }

  onReset() {
    this.myForm.reset();
  }

  ajoutOperation() {
    this.operationService.addOperation(this.newOperation).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Operation ajouté!',
          icon: 'success',
          showCancelButton: true,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: 'Voir la liste',
          cancelButtonText: 'Ajouter une autre opération'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/operation'])
          }
        })
      }
    });
  }

}