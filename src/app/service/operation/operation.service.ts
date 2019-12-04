import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../../models/Operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Operation[]>("http://localhost:8080/operation").pipe()
  }

  addOperation(operation: Operation) {
    return this.http.post("http://localhost:8080/operation", operation).pipe()
  }

  getOne(id: number) {
    return this.http.get<Operation>("http://localhost:8080/operation/" + id).pipe()
  }

  deleteOperation(id: number) {
    return this.http.delete("http://localhost:8080/operation/" + id).pipe()
  }

  updateOperation(operation: Operation, id: number) {
    return this.http.put("http://localhost:8080/operation/" + id, operation).pipe()
  }

  attribuerPatient(idOperation: number, idPatient: number) {
    return this.http.put("http://localhost:8080/operation/" + idOperation + "/patient" + idPatient, "").pipe()
  }

  attribuerSalle(idOperation: number, idSalle: number) {
    return this.http.put("http://localhost:8080/operation/" + idOperation + "/salle" + idSalle, "").pipe()
  }

  attribuerMedecin(idOperation: number, idMedecin: number) {
    return this.http.put("http://localhost:8080/operation/" + idOperation + "/medecin" + idMedecin, "").pipe()
  }

}
