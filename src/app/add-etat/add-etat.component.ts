import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Etat } from '../models/Etat';
import { EtatService } from '../service/etat/etat.service';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})
export class AddEtatComponent implements OnInit {

  newEtat: Etat = new Etat();
  myForm: FormGroup;

  constructor(private etatService: EtatService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      libelleEtat: ['', Validators.required],
    })
  }

  onReset() {
    this.myForm.reset();
  }

  ajoutEtat() {
    this.etatService.addEtat(this.newEtat).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Etat ajouté!',
          icon: 'success',
          showCancelButton: true,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: 'Voir la liste',
          cancelButtonText: 'Ajouter un autre état'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/etat'])
          }
        })
      }
    });
  }

}
