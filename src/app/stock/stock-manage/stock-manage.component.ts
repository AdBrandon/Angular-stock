import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks:Observable<Stock[]>;

  private nameFilter:FormControl = new FormControl();
  private keyWord:String;

  constructor(public router:Router , private stockService:StockService ) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges.debounceTime(500).subscribe(
      value => {
        this.keyWord = value;
        this.stocks = this.stockService.getStocks(this.keyWord);
        console.log(this.stocks)
      }
    )
  }

  create(){
    this.router.navigateByUrl('/stock/0')
  };
  updata(stock:Stock){
    this.router.navigateByUrl('/stock/' + stock.id)
  };
  deleteStock(stock:Stock){
    this.stockService.deleteStock(stock.id).subscribe(
      data =>{
        this.ngOnInit();
      }
    )
  }

}
