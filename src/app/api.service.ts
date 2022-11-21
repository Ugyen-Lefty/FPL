import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, updateDoc, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userCollection: any;

  constructor(private fire: Firestore) {

  }

  getUsers() {
    const users = collection(this.fire, 'users');
    this.userCollection = collectionData(users);
    return this.userCollection;
  }

  newUser(data: any) {
    return addDoc(collection(this.fire, "users"), data);
  }

  updateUserMoney(id: any, data: any) {
    const userRef = doc(this.fire, "users", id);
    updateDoc(userRef, {
      money: data
    });
  }

}
