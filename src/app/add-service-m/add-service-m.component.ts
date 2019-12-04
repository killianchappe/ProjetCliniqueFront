import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceM } from "../models/ServiceM"
import { ServiceMService } from "../service/serviceM/service-m.service"

@Component({
  selector: 'app-add-service-m',
  templateUrl: './add-service-m.component.html',
  styleUrls: ['./add-service-m.component.css']
})
export class AddServiceMComponent implements OnInit {

  newServiceM: ServiceM = new ServiceM();
  myForm: FormGroup;

  constructor(private serviceMService: ServiceMService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nomService: ['', Validators.required],
    })
  }

  onReset() {
    this.myForm.reset();
  }

  ajoutServiceM() {
    this.serviceMService.addServiceM(this.newServiceM).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Service médical ajouté!',
          icon: 'success',
          showCancelButton: true,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: 'Voir la liste',
          cancelButtonText: 'Ajouter un autre service'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/servicem'])
          }
        })
      }
    });
  }

}
