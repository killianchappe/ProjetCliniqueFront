import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Medecin } from '../models/Medecin';
import { MedecinService } from '../service/medecin/medecin.service';
import { ServiceM } from '../models/ServiceM';
import { ServiceMService } from '../service/serviceM/service-m.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  newMedecin: Medecin = new Medecin();
  myForm: FormGroup;
  listServicesM: ServiceM[] = [];

  constructor(private medecinService: MedecinService,
    private router: Router,
    private formBuilder: FormBuilder,
    private serviceMService: ServiceMService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nomMedecin: ['', Validators.required],
      prenomMedecin: ['', Validators.required],
      serviceMedecin: ['', Validators.required]
    });
    this.serviceMService.getAll().subscribe(data => {
      this.listServicesM = data;
    });
  }

  onReset() {
    this.myForm.reset();
  }

  ajoutMedecin() {
    this.medecinService.addMedecin(this.newMedecin).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Médecin ajouté!',
          icon: 'success',
          showCancelButton: true,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: 'Voir la liste',
          cancelButtonText: 'Ajouter un autre médecin'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/medecin'])
          }
        })
      }
    });
  }

}
