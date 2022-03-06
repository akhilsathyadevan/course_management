import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckapplicationsComponent } from './checkapplications.component';

describe('CheckapplicationsComponent', () => {
  let component: CheckapplicationsComponent;
  let fixture: ComponentFixture<CheckapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
