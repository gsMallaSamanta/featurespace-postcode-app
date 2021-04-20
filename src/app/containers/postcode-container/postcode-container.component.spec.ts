import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';
import { PostcodeContainerComponent } from './postcode-container.component';

describe('PostcodeContainerComponent', () => {
  let component: PostcodeContainerComponent;
  let fixture: ComponentFixture<PostcodeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcodeContainerComponent ],
      imports: [
        StoreModule.forRoot(reducers),
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
