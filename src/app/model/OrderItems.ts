import {Product} from "./Product";

export class OrderItems{
  public product!: Product
  public quantity: number=1
  public totalprice!:number

  constructor(product: Product) {
    this.product = product;
    this.totalprice=product.price
  }

  // get product(): Product {
  //   return this._product;
  // }
  //
  // set product(value: Product) {
  //   this._product = value;
  // }
  //
  // get quantity(): number {
  //   return this._quantity;
  // }
  //
  // set quantity(value: number) {
  //   this._quantity = value;
  // }

  addquantity(){
    this.quantity+=1
    this.totalprice=this.quantity*this.product.price

  }
}
