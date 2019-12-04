import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceM } from '../models/ServiceM';
import { ServiceMService } from '../service/serviceM/service-m.service';

@Component({
  selector: 'app-service-m',
  templateUrl: './service-m.component.html',
  styleUrls: ['./service-m.component.css']
})
export class ServiceMComponent implements OnInit {

  listServicesM: ServiceM[] = [];

  constructor(private serviceMService: ServiceMService, private router: Router) { }

  ngOnInit() {
    this.serviceMService.getAll().subscribe(data => {
      this.listServicesM = data;
    })
  }

  deleteServiceM(id: number, index) {
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
        this.serviceMService.deleteServiceM(id).subscribe(res => {
          if (res) {
            this.ngOnInit();
            this.router.navigate(['/servicem']);
          } else {
            Swal.fire({
              title: 'Vous ne pouvez pas faire ça : des médecins appartiennent à ce service!',
              icon: 'warning',
              confirmButtonText: 'OK',
            })
          }
        })
      }
    })

  }

}
