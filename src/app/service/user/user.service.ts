import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>("http://localhost:8080/user").pipe()
  }

  addUser(user: User) {
    return this.http.post("http://localhost:8080/user", user).pipe()
  }

  getOne(id: number) {
    return this.http.get<User>("http://localhost:8080/user/" + id).pipe()
  }

  deleteUser(id: number) {
    return this.http.delete("http://localhost:8080/user/" + id).pipe()
  }

  updateUser(user: User, id: number) {
    return this.http.put("http://localhost:8080/user/" + id, user).pipe()
  }

  findByLoginAndPwd(user: User) {
    return this.http.post("http://localhost:8080/user/login", user).pipe()
  }

}
