import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: boolean | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
