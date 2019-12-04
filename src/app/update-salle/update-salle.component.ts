import { Component, OnInit } from '@angular/core';
import { Salle } from '../models/Salle';
import { SalleServiceService } from '../service/salle/salle-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrls: ['./update-salle.component.css']
})
export class UpdateSalleComponent implements OnInit {

  idCourant: number;
  salleCourante: Salle = new Salle();
  myForm: FormGroup;

  constructor(private salleService: SalleServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.idCourant = parseInt(this.route.snapshot.paramMap.get('id'));
    this.salleService.getOne(this.idCourant).subscribe(data => {
      this.salleCourante = data;
    });
    this.myForm = this.formBuilder.group({
      numeroSalle: ['', Validators.required],
      typeSalle: ['', Validators.required],
    });
  }

  onReset() {
    this.myForm.reset();
  }

  updateSalle(salle: Salle) {
    this.salleService.updateSalle(salle, this.idCourant).subscribe(res => {
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
            this.router.navigate(['/salle'])
          }
        })
      }
    });
  }

}
