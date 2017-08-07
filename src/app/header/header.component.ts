import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message.server";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messageCount = 5;
  notifications = 8;
  tasks = 4;

  constructor(public router:Router,public messageServer:MessageService) { }

  ngOnInit() {
    // this.messageServer.createObservableSocket("ws://"+environment.address+":8085")
    //   .map(event => JSON.parse(event))
    //   .subscribe(
    //     event => {
    //       if (event.messageCount > 0){
    //         this.messageCount = event.messageCount;
    //       }
    //       if (event.notifications > 0){
    //         this.notifications = event.notifications;
    //       }
    //       if (event.tasks > 0){
    //         this.tasks = event.tasks;
    //       }
    //     }
    //   )
  }

}
