import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Operation } from '../models/Operation';
import { Medecin } from '../models/Medecin';
import { Patient } from '../models/Patient';
import { Salle } from '../models/Salle';
import { OperationService } from '../service/operation/operation.service';
import { PatientService } from '../service/patient/patient.service';
import { MedecinService } from '../service/medecin/medecin.service';
import { SalleServiceService } from '../service/salle/salle-service.service';

@Component({
  selector: 'app-update-operation',
  templateUrl: './update-operation.component.html',
  styleUrls: ['./update-operation.component.css']
})
export class UpdateOperationComponent implements OnInit {

  idCourant: number;
  operationCourante: Operation = new Operation();
  myForm: FormGroup;
  listPatients: Patient[] = [];
  listMedecins: Medecin[] = [];
  listSalles: Salle[] = [];

  constructor(private operationService: OperationService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private medecinService: MedecinService,
    private salleService: SalleServiceService) { }

  ngOnInit() {
    this.idCourant = parseInt(this.route.snapshot.paramMap.get('id'));
    this.operationService.getOne(this.idCourant).subscribe(data => {
      this.operationCourante = data;
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
    this.myForm = this.formBuilder.group({
      dateOperation: ['', Validators.required],
      patientOperation: ['', Validators.required],
      medecinOperation: ['', Validators.required],
      salleOperation: ['', Validators.required]
    });
  }

  onReset() {
    this.myForm.reset();
  }

  updateOperation(operation: Operation) {
    this.operationService.updateOperation(operation, this.idCourant).subscribe(res => {
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
            this.router.navigate(['/operation'])
          }
        })
      }
    });
  }

  byIdPatient(p1: Patient, p2: Patient) {
    return p1['idPatient'] === p2['idPatient'];
  }

  byIdMedecin(m1: Medecin, m2: Medecin) {
    return m1['idMedecin'] === m2['idMedecin'];
  }

  byIdSalle(s1: Salle, s2: Salle) {
    return s1['idSalle'] === s2['idSalle'];
  }

}
