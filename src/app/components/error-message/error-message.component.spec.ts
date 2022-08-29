import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    
  }));

  
  it('should show the error msg on field touch and err present', ()=>{
    
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = "anyError";

    expect(component.shouldShowComponent()).toBeTruthy();
  })

  it('should hide error msg on field not touch', ()=>{
    
    component.field = new FormGroup({anyField: new FormControl()});

    
    component.field.setErrors({anyError: true});
    component.error = "anyError";
  
    expect(component.shouldShowComponent()).toBeFalsy();
  })  
  
  it('should hide error on field touch, but no errors ', ()=>{

    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    
    component.error = "anyError";

    expect(component.shouldShowComponent()).toBeFalsy();

  })

  it('should hide error message on field touch and has error, but it is a diferent error', ()=>{

    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = "anotherError";

    expect(component.shouldShowComponent()).toBeFalsy();

  })



});
