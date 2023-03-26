import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTMEComponent } from './contact-me.component';

describe('CONTACTMEComponent', () => {
  let component: CONTACTMEComponent;
  let fixture: ComponentFixture<CONTACTMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONTACTMEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CONTACTMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
