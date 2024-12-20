import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {
  display = '0';
  firstValue: number | null = null;
  action: string | null = null;

  numClick(val:any) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action:any) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }
  
  calculate() {
    // debugger;
    const a:any = this.firstValue;
    const b = parseFloat(this.display);

    let result;
    if (this.action === 'm') {
      result = a * b;
    }
    else if (this.action === 'd') {
      result = a / b;
    }
    else if (this.action === 'a') {
      result = a + b;
    }
    else if (this.action === 's') {
      result = a - b;
    }

    this.firstValue = result;
    this.display = result.toString();
  }
}
