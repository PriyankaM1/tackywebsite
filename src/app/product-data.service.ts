import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
    cartData: number = 0;
  public constructor() {
    if(this.cartData!=0){
      this.cartData=this.cartData;
    }
   }
}
