import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeComponent } from './postcode.component';

describe('PostcodeComponent', () => {
  let component: PostcodeComponent;
  let fixture: ComponentFixture<PostcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit', () => {
    it('should emit submitEvent if the postcode is valid', () => {
      const emitSpy = spyOn(component.submitEvent, 'emit');
      component.postcodeForm.patchValue({
        postcode: 'abc123'
      });
      component.submit();

      expect(emitSpy).toHaveBeenCalledWith('abc123');
    });

    it('should show error if postcode is not valid', () => {
      component.postcodeForm.patchValue({
        postcode: 'abc'
      });
      component.submit();

      expect(component.errors.error.error).toEqual('Postcode length too small');
    })
  });
});
