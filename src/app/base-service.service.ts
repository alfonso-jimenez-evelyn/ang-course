import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  commonGreeting?: string;
  commonFarewell?: string;

  saludar(initialGreeting: string){
    console.log(`${initialGreeting} , raaaaaaaaaaaaaaaaaaaaaaaaa?`);
  }

  preguntar():string{
    return 'Que haces';
  }

  getCommonGreeting():string{
    return this.commonGreeting || "";
  }

  setCommonGreeting(greeting: string){
    this.commonGreeting = greeting;
  }
}
