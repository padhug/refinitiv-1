import { Component } from '@angular/core';

@Component({
  selector: 'prime-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input: undefined | Number | any = undefined;
  currentCalcMethod = 'isPrime';
  result: undefined | boolean = undefined;

  updateInputAndResult(userInput: any) {
    this.input = userInput;
    this.updateResult();
  }

  updateCalcMethodAndResult(calcMethod: any) {
    this.currentCalcMethod = calcMethod;
    this.updateResult();
    console.log(this.input)
  }

  updateResult() {
    if(this.input) { 
      const calc = this.currentCalcMethod === 'isPrime' ? this.isPrime : this.isFibonacci;
      this.result = calc(this.input);
    }
  }

  isPrime(number: Number | any) {
  let isPrime = true;
  if (number === 1) {
    isPrime = true;      
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              isPrime = false;
              break;
          }
      }
    }
    return isPrime;
  }
  

  isFibonacci= (query: Number, count = 1, last = 0): any => {
      if(count < query){
         return this.isFibonacci(query, count+last, count);
      };
      if(count === query){
         return true;
      }
      return false; 
  }
}
