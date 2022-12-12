import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, updateDoc, doc, docData } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://fantasy-football.fly.dev';
  userCollection: any;

  constructor(private fire: Firestore, private http: HttpClient) {

  }

  getCurrentUser() {
    return this.http.get(`${this.url}/users/current_user`);
  }

  getUsers() {
    // this.userCollection = collectionData(users);
    const users = collection(this.fire, 'users');
    return collectionData(users, {
      idField: 'id',
    });
  }

  getById(id: string) {
    const ref = doc(this.fire, `users/${id}`);
    return docData(ref, { idField: 'id' });
  }

  newUser(data: any) {
    return addDoc(collection(this.fire, "users"), data);
  }

  // updateUserMoney(id: any, data: any) {
  //   const userRef = doc(this.fire, "users", id);
  //   updateDoc(userRef, {
  //     money: data
  //   });
  // }

  updateUserMoney(data: any, id: any) {
    const userRef = doc(this.fire, `users/${id}`);
    // return updateDoc(userRef, { ...data });
    return updateDoc(userRef, { money: 28 });
  }

}
