import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleOfTwoButtonsPageComponent } from './tale-of-two-buttons-page.component';

describe('TaleOfTwoButtonsPageComponent', () => {
  let component: TaleOfTwoButtonsPageComponent;
  let fixture: ComponentFixture<TaleOfTwoButtonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaleOfTwoButtonsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaleOfTwoButtonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
