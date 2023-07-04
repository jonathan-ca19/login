import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _htpp: HttpClient) { }

  addUser(data: any): Observable<any>{
    return this._htpp.post('http://localhost:3000/login', data);
  }

  updateUser(id:number,data: any): Observable<any>{
    return this._htpp.put(`http://localhost:3000/login/${id}`, data);
  }
  
  getUserList(): Observable<any>{
    return this._htpp.get('http://localhost:3000/login');
  }
  deleteUser(id:number): Observable<any>{
    return this._htpp.delete(`http://localhost:3000/login/${id}`)

  }
  addRegister(){
  }
}
