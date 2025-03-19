import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BaseFacade } from '../store/base/base.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const baseFacadeMock = {
    setHome: jasmine.createSpy('setHome'),
    loadBaseItems: jasmine.createSpy('loadBaseItems'),
    base$: of([]),
    baseItems$: of([]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: BaseFacade, useValue: baseFacadeMock },
        provideMockStore({}),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
