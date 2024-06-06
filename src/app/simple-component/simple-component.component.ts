import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponentComponent {
  
  @Input() message: string = "";
  @Output() response = new EventEmitter<string>();
  @Output() increase = new EventEmitter<void>();

  messageOutput: string = "";

  sendMessage(){
    this.response.emit(this.messageOutput);
  }

  incrementar(){
    this.increase.emit();
  }
}
