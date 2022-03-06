import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofessorComponent } from './viewprofessor.component';

describe('ViewprofessorComponent', () => {
  let component: ViewprofessorComponent;
  let fixture: ComponentFixture<ViewprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
