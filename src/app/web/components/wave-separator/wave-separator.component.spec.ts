import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveSeparatorComponent } from './wave-separator.component';

describe('WaveSeparatorComponent', () => {
  let component: WaveSeparatorComponent;
  let fixture: ComponentFixture<WaveSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
