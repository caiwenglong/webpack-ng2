/* tslint:disable:no-unused-variable 

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
    let fixture: any;
    let component: AppComponent;

beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AppComponent]
    })
    .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });
}));

  it('true is true', () => expect(true).toBe(true));
    
  it('should create the app', async(() => {
    expect(component).toBeDefined();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(component.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
*/