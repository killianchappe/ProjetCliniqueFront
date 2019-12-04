import { Component, OnInit } from '@angular/core';
import { Salle } from "../models/Salle";
import { SalleServiceService } from "../service/salle/salle-service.service";
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {

  newSalle: Salle = new Salle();
  myForm: FormGroup;


  constructor(private salleService: SalleServiceService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      numeroSalle: ['', Validators.required],
      typeSalle: ['', Validators.required]
    })
  }

  onReset() {
    this.myForm.reset();
  }

  ajoutSalle() {
    this.salleService.addSalle(this.newSalle).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Salle ajouté!',
          icon: 'success',
          showCancelButton: true,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: 'Voir la liste',
          cancelButtonText: 'Ajouter une autre salle'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/salle'])
          }
        })
      }
    });
  }

}
