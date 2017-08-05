import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menus:Array<Menu>;

  currentMenuId:number = 1;

  constructor(public router:Router) {
    this.menus = [
      new Menu(1,"首页","dashboard"),
      new Menu(2,"股票管理","stock")

    ]
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        this.currentMenuId = event.id;
        if(event.url.startsWith('/stock')){
          this.currentMenuId = 2;
        } else {
          this.currentMenuId = 1;
        }
      })
  }
  ngOnInit(): void {
  }

  nav(menu:Menu){
    this.router.navigateByUrl(menu.link);
  }

}
export class Menu{
  constructor(
    public id:number,
    public name:string,
    public link:string
  ){}
}
