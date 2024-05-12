import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/Product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private tarolo: AngularFirestore) { }

  getProducts(): Observable<Product[]> {
    return this.tarolo.collection<Product>('Products').valueChanges();
  }
  getProductById() {
    return this.tarolo.collection<Product>('Products').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action =>{
          const data = action.payload.doc.data() as Product;
          return {id: action.payload.doc.id, name: data.name};
        });
      })
    );
  }
}
