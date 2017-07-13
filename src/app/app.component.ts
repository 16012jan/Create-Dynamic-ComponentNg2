import {Component, ComponentFactoryResolver, ComponentRef, ElementRef, Renderer2, ViewChild, ViewContainerRef
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public component: ComponentRef<AuthFormComponent>;
  public components: Array<ComponentRef<any>> = [];

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private ref: ElementRef,
    private render: Renderer2
  ) {}

  public createAuthForm() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'Create Account';
    this.component.instance.destroy.subscribe((component) => {
      this.destroyComponent(component);
    });
    this.components.push(this.component);
  }

  public moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  public destroyComponent(component) {
    // destroy component
  }
}

