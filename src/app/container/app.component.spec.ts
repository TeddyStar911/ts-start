import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BaseFacade } from '../store/base/base.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  const baseFacadeMock = {
    setHome: jasmine.createSpy('setHome'),
    loadBaseItems: jasmine.createSpy('loadBaseItems'),
    base$: jasmine.createSpy('base$').and.returnValue(of([])),
    baseItems$: jasmine.createSpy('baseItems$').and.returnValue(of([])),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: BaseFacade, useValue: baseFacadeMock },
        provideMockStore({}),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
