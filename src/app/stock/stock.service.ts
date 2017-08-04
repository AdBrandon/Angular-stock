import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class StockService {

  constructor(public http:Http) {
  }

  getStocks(name?:String):Observable<Stock[]>{
    let url='/api/stock';
    if(name){
      url=url+'?name='+name;
    }
    return this.http.get(url).map(res => res.json());
  }

  getStock(id:number):Observable<Stock>{
    return this.http.get('/api/stock/' + id).map(res => res.json());
  }

  deleteStock(id:number):Observable<Stock>{
    return this.http.get('/api/deleteStock/' + id).map(res => res.json());
  }
  saveStock(data){
    return this.http.post('/api/savestock', data).map(res => res.json());
  }
}
export class Stock{
  constructor(
    public id: number,
    public name: string,
    public price:number,
    public rating: number,
    public desc:string,
    public categories: Array<string>
  ){}
}
