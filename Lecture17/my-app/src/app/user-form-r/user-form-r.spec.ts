import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormR } from './user-form-r';

describe('UserFormR', () => {
  let component: UserFormR;
  let fixture: ComponentFixture<UserFormR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormR],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormR);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
