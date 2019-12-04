import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceM } from '../models/ServiceM';
import { ServiceMService } from '../service/serviceM/service-m.service'

@Component({
  selector: 'app-update-service-m',
  templateUrl: './update-service-m.component.html',
  styleUrls: ['./update-service-m.component.css']
})
export class UpdateServiceMComponent implements OnInit {

  idCourant: number;
  serviceMCourant: ServiceM = new ServiceM();
  myForm: FormGroup;

  constructor(private serviceMService: ServiceMService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.idCourant = parseInt(this.route.snapshot.paramMap.get('id'));
    this.serviceMService.getOne(this.idCourant).subscribe(data => {
      this.serviceMCourant = data;
    });
    this.myForm = this.formBuilder.group({
      nomService: ['', Validators.required],
    });
  }

  onReset() {
    this.myForm.reset();
  }

  updateServiceM(serviceM: ServiceM) {
    this.serviceMService.updateServiceM(serviceM, this.idCourant).subscribe(res => {
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
            this.router.navigate(['/servicem'])
          }
        })
      }
    });
  }

}
