import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to the pickupcall by clicking se all', () => {
    spyOn(router, 'navigate');

    component.pickupcall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call'])
  });


  it('should go to the pickupcall by clicking se all', () => {
    spyOn(router, 'navigate');

    component.addCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call'])
  });

});
