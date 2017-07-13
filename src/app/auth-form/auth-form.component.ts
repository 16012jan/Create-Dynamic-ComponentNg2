import {
  Component, ComponentRef, ElementRef, EventEmitter, Host, Injector, OnInit, Output,
  ViewContainerRef
} from '@angular/core';
import {User} from '../shared/intefaces/user';
import {Http} from '@angular/http';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {

  public title = 'Login';
  public componentLink: ComponentRef<AuthFormComponent>;

  @Output('destroy')
  destroy: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http) {
  }

  public onSubmit(value: User) {
    this.http.post('/postData', value)
      .subscribe((res) => res.json());
  }

  public destroyComponent() {
    // Send Some data to Parent
  }
}
