import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPremieres } from './upcoming-premieres.component';

describe('TopRatedComponent', () => {
  let component: UpcomingPremieres;
  let fixture: ComponentFixture<UpcomingPremieres>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingPremieres]
    });
    fixture = TestBed.createComponent(UpcomingPremieres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
