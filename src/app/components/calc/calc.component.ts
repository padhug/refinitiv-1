import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'prime-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  @Output() calcMethodUpdated = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  updateCalcMethod(changeEvent: any) {
    this.calcMethodUpdated.emit(changeEvent.target.value);
  }

}
