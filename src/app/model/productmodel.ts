// JavaScript source code
export interface IProductModel {
  ProductId: number;
  ProductName: string;
  Sku: string;
  ReleaseDate: string;
  Price: number;
  Rating: string;
}

export class ProductModel implements IProductModel{
  ProductId: number;
  ProductName: string;
  Sku: string;
  ReleaseDate: string;
  Price: number;
  Rating: string;
  
   
  constructor(private id =null,private name =null,private skuid =null,private date =null,private priceInfo =null,private ratingInfo  =null) {
    this.ProductId = id;
    this.ProductName=name;
    this.Sku= skuid;
    this.ReleaseDate= date;
    this.Price= priceInfo;
    this.Rating=ratingInfo;
  }
}