import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataType } from '../models/user-data-type';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = "https://67e0d94c58cc6bf78523245f.mockapi.io/api/v1/users"

  constructor( private httpCleint:HttpClient) { }

  getAllUsers(){
    return this.httpCleint.get<UserDataType[]>(this.baseUrl)
  }

  addUser(user:UserDataType){
    return this.httpCleint.post<UserDataType[]>(this.baseUrl,user)
  }

  updateUser(userId:number,updatedUser:UserDataType){
    debugger
    return this.httpCleint.put<UserDataType[]>(`${this.baseUrl}/${userId}`,updatedUser)
  }

  deleteUser(UserId:UserDataType){
    return this.httpCleint.delete<UserDataType[]>(`${this.baseUrl}/${UserId}`)
  }

  
}
