import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'prime-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input = '';
  @Output() inputChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  updateInput() {
    const userInput = Number(this.input);
    if(isNaN(userInput) || this.input === '') {
      this.input = ''
      this.inputChanged.emit(undefined);
      console.log(this.input)
    } else if(userInput < 1) {
      this.input = '1'
      this.inputChanged.emit(1);
    } else {
      this.inputChanged.emit(userInput);
    }
    
  }

}
