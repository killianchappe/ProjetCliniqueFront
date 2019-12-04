import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medecin } from '../../models/Medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Medecin[]>("http://localhost:8080/medecin").pipe()
  }

  addMedecin(medecin: Medecin) {
    return this.http.post("http://localhost:8080/medecin", medecin).pipe()
  }

  getOne(id: number) {
    return this.http.get<Medecin>("http://localhost:8080/medecin/" + id).pipe()
  }

  deleteMedecin(id: number) {
    return this.http.delete("http://localhost:8080/medecin/" + id).pipe()
  }

  updateMedecin(medecin: Medecin, id: number) {
    return this.http.put("http://localhost:8080/medecin/" + id, medecin).pipe()
  }

  attribuerServiceM(idMedecin: number, idServiceM: number) {
    return this.http.put("http://localhost:8080/medecin/" + idMedecin + "/" + idServiceM,"").pipe()
  }

}
