import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   describe('numClick()', () => {
    it('should set display to the clicked number when display is "0"', () => {
      component.display = '0';
      component.numClick(5);
      expect(component.display).toBe('5');
    });

    it('should append the clicked number to display when display is not "0"', () => {
      component.display = '1';
      component.numClick(5);
      expect(component.display).toBe('15');
    });


  });
  describe('oper()', () => {
    it('should store the current display value as `firstValue` and set the action', () => {
      component.display = '25';
      component.oper('a');
      expect(component.firstValue).toBe(25);
      expect(component.action).toBe('a');
      expect(component.display).toBe(' ');
    });
  });
  describe('calculate()', () => {
    it('should correctly calculate multiplication', () => {
      component.firstValue = 5;
      component.display = '4';
      component.action = 'm';
      component.calculate();
      expect(component.display).toBe('20');
      expect(component.firstValue).toBe(20);
    });

    it('should correctly calculate division', () => {
      component.firstValue = 20;
      component.display = '4';
      component.action = 'd';
      component.calculate();
      expect(component.display).toBe('5');
      expect(component.firstValue).toBe(5);
    });

    it('should correctly calculate addition', () => {
      component.firstValue = 10;
      component.display = '15';
      component.action = 'a';
      component.calculate();
      expect(component.display).toBe('25');
      expect(component.firstValue).toBe(25);
    });

    it('should correctly calculate subtraction', () => {
      component.firstValue = 50;
      component.display = '20';
      component.action = 's';
      component.calculate();
      expect(component.display).toBe('30');
      expect(component.firstValue).toBe(30);
    });
  });
});
