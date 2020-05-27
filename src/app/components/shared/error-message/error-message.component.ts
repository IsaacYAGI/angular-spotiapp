import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() mensajeError: string;

  @Output() reintentar: EventEmitter<boolean>;
  constructor() { 
    this.reintentar = new EventEmitter();

  }

  ngOnInit(): void {
  }

  quiereReintentar(): void{
    this.reintentar.emit(true);
  }

}
