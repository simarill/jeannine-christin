import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranioComponent } from './cranio.component';

describe('CranioComponent', () => {
  let component: CranioComponent;
  let fixture: ComponentFixture<CranioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CranioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CranioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
