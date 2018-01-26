import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListaComponent } from './post-lista.component';

describe('PostListaComponent', () => {
  let component: PostListaComponent;
  let fixture: ComponentFixture<PostListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
