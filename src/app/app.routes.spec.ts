import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { TestComponentComponent } from './componets/test-component/test-component.component';

describe('AppRoutes', () => {
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ RouterModule.forRoot(
        [{path: '', component: TestComponentComponent}, {path: '**', component: TestComponentComponent}]
      )],
      declarations: [TestComponentComponent], // Declare the routed component
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should navigate to the root path', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    await router.navigate(['']);
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should navigate to the wildcard path', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    await router.navigate(['random-path']);
    expect(navigateSpy).toHaveBeenCalledWith(['random-path']);
  });
});
