import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cart } from '../models/Cart';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private tarolo: AngularFirestore) { }

  addToCart(product: any) {
    this.tarolo.collection('Cart').add(product)
    .then( () => {
      console.log('Termék hozzáadva a kosárhoz: ', product);
      alert('Termék sikeresen hozzáadva a kosárhoz!')
    })
    .catch((error: any) => {
      console.error('Hiba történt a kosárhoz adás közben: ', error);
    });
  }

  getCartItems(){
    return this.tarolo.collection<Cart>('Cart').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action =>{
          const data = action.payload.doc.data() as Cart;
          return {id: action.payload.doc.id, name: data.name, price: data.price};
        });
      })
    );
  }

  removeFromCart(id: string){
      this.tarolo.doc<Cart>('Cart/' + id).delete();
      console.log('Termék eltávolítva a kosárból');
      alert('Termék sikeresen eltávolítva a kosárból!');
  }
}
