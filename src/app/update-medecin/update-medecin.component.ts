import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Medecin } from "../models/Medecin";
import { MedecinService } from "../service/medecin/medecin.service";
import { ServiceM } from "../models/ServiceM";
import { ServiceMService } from "../service/serviceM/service-m.service"

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {

  idCourant: number;
  medecinCourant: Medecin = new Medecin();
  myForm: FormGroup;
  listServicesM: ServiceM[] = [];

  constructor(private medecinService: MedecinService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private serviceMService: ServiceMService) { }

  ngOnInit() {
    this.idCourant = parseInt(this.route.snapshot.paramMap.get('id'));
    this.medecinService.getOne(this.idCourant).subscribe(data => {
      this.medecinCourant = data;
    });
    this.serviceMService.getAll().subscribe(data => {
      this.listServicesM = data;
    })
    this.myForm = this.formBuilder.group({
      nomMedecin: ['', Validators.required],
      prenomMedecin: ['', Validators.required],
      serviceMedecin: ['', Validators.required],
    });
  }

  onReset() {
    this.myForm.reset();
  }

  updateMedecin(medecin: Medecin) {
    this.medecinService.updateMedecin(medecin, this.idCourant).subscribe(res => {
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
            this.router.navigate(['/medecin'])
          }
        })
      }
    });
  }

  byIdServiceM(serv1: ServiceM, serv2: ServiceM) {
    return serv1['idService'] === serv2['idService'];
  }

}
