import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../../models/Patient'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Patient[]>("http://localhost:8080/patient").pipe()
  }

  addPatient(patient: Patient) {
    return this.http.post("http://localhost:8080/patient", patient).pipe()
  }

  getOne(id: number) {
    return this.http.get<Patient>("http://localhost:8080/patient/" + id).pipe()
  }

  deletePatient(id: number) {
    return this.http.delete("http://localhost:8080/patient/" + id).pipe()
  }

  updatePatient(patient: Patient, id: number) {
    return this.http.put("http://localhost:8080/patient/" + id, patient).pipe()
  }

  attribuerEtat(idPatient: number, idEtat: number) {
    return this.http.put("http://localhost:8080/medecin/" + idPatient + "/" + idEtat, "").pipe()
  }

}