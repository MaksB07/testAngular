import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.scss']
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 1;

  public operation: string = '-';
  public operations: string[] =['-', '+', '*', '/'];

  public result?: number = 0;
  
  public calc() {
    if(this.operation){
      switch(this.operation){
        case '+':
          this.result = +this.first + +this.second;
          break;
          case '-':
            this.result = +this.first - +this.second;
             break;
            case '*':
          this.result = +this.first * +this.second;
           break;
          case '/':
          this.result = +this.first / +this.second;
           break;
           default: 
           this.result = 0;
            break;
      }
      console.log(this.result)
    }
  }
}
