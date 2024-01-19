import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPageComponent } from './hello-page.component';

describe('HelloPageComponent', () => {
  let component: HelloPageComponent;
  let fixture: ComponentFixture<HelloPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
