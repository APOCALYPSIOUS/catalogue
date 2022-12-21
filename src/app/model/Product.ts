export class Product{
  public id : number
  public label : string
  public price :number
  public imgurl :string

  public availability:Boolean


  constructor(id: number, label: string, price: number, imgurl: string,availability:boolean) {
    this.id = id;
    this.label = label;
    this.price = price;
    this.imgurl = imgurl;
    this.availability=availability
  }
}
