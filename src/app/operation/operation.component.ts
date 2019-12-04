import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Operation } from '../models/Operation';
import { OperationService } from '../service/operation/operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  listOperations: Operation[] = [];

  constructor(private router: Router,
    private operationService: OperationService) { }

  ngOnInit() {
    this.operationService.getAll().subscribe(data => {
      this.listOperations = data;
    })
  }

  deleteOperation(id: number, index) {
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
        this.operationService.deleteOperation(id).subscribe(res => {
          if (res) {
            this.ngOnInit();
            this.router.navigate(['/operation']);
          } else {
          }
        })
      }
    })

  }

}
