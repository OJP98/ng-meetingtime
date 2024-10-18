import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsContainerComponent } from './locations-container.component';

describe('LocationsContainerComponent', () => {
  let component: LocationsContainerComponent;
  let fixture: ComponentFixture<LocationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
