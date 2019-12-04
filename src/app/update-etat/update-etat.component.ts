import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Etat } from '../models/Etat';
import { EtatService } from '../service/etat/etat.service';

@Component({
  selector: 'app-update-etat',
  templateUrl: './update-etat.component.html',
  styleUrls: ['./update-etat.component.css']
})
export class UpdateEtatComponent implements OnInit {

  idCourant: number;
  etatCourant: Etat = new Etat();
  myForm: FormGroup;

  constructor(private etatService: EtatService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.idCourant = parseInt(this.route.snapshot.paramMap.get('id'));
    this.etatService.getOne(this.idCourant).subscribe(data => {
      this.etatCourant = data;
    });
    this.myForm = this.formBuilder.group({
      libelleEtat: ['', Validators.required],
    });
  }

  onReset() {
    this.myForm.reset();
  }

  updateEtat(etat: Etat) {
    this.etatService.updateEtat(etat, this.idCourant).subscribe(res => {
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
            this.router.navigate(['/etat'])
          }
        })
      }
    });
  }

}
