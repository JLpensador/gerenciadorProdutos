import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItensComponent } from './no-itens.component';

describe('NoItensComponent', () => {
  let component: NoItensComponent;
  let fixture: ComponentFixture<NoItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
