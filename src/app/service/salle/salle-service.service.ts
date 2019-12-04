import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salle } from "../../models/Salle";

@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Salle[]>("http://localhost:8080/salle").pipe()
  }

  addSalle(salle: Salle) {
    return this.http.post("http://localhost:8080/salle/", salle).pipe()
  }

  getOne(id: number) {
    return this.http.get<Salle>("http://localhost:8080/salle/" + id).pipe()
  }

  deleteSalle(id: number) {
    return this.http.delete("http://localhost:8080/salle/" + id).pipe()
  }

  updateSalle(salle: Salle, id: number) {
    return this.http.put("http://localhost:8080/salle/" + id, salle).pipe()
  }

}