import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle:string = "首页";
  pageDesc:string;

  constructor( public router:Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        if(event.url.startsWith('/stock')){
          this.pageTitle = '股票信息管理';
          this.pageDesc='可以进行股票信息基本操作';
        } else {
          this.pageTitle = '首页';
          this.pageDesc='';
        }
      })
  }

  ngOnInit() {
  }

}
