import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceM } from "../../models/ServiceM";

@Injectable({
  providedIn: 'root'
})
export class ServiceMService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ServiceM[]>("http://localhost:8080/serviceM").pipe()
  }

  addServiceM(serviceM: ServiceM) {
    return this.http.post("http://localhost:8080/serviceM", serviceM).pipe()
  }

  getOne(id: number) {
    return this.http.get<ServiceM>("http://localhost:8080/serviceM/" + id).pipe()
  }

  deleteServiceM(id: number) {
    return this.http.delete("http://localhost:8080/serviceM/" + id).pipe()
  }

  updateServiceM(serviceM: ServiceM, id: number) {
    return this.http.put("http://localhost:8080/serviceM/" + id, serviceM).pipe()
  }

}
