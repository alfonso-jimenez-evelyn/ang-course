import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from '../base-service.service';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.css']
})
export class TopComponentComponent implements OnInit {

  constructor(
    private _baseService : BaseServiceService
  ){}
  
  topCompTitle: string = "This is the title from the top Component";
  randomNumber: number = 10;
  messageInput: string = "Hello";
  messageOutput: string = "";

  greeting?:string;

  receivedMessage($event: string){
    this.messageOutput = $event;
  }

  add(){
    this.randomNumber++;
  }

  decrease(){
    this.randomNumber--;
  }

  ngOnInit(): void {
    this._baseService.setCommonGreeting("This is my custom greeting");
    this.greeting = this._baseService.getCommonGreeting();
  }

  saludar(){
    this._baseService.saludar(this.greeting || "");
  }
}