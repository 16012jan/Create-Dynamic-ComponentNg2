import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public component: ComponentRef<AuthFormComponent>;
  private index: number;
  private componentIdsMap = new Map;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {
    this.index = 0;
  }

  public createAuthForm() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'Create Account';
    const id = `id ${this.index}`;
    this.component.instance.componentId = id;
    this.componentIdsMap.set(id, this.component);
    this.index += 1;
    this.component.instance.destroy.subscribe((componentId) => {
      this.destroyComponent(componentId);
    })
  }

  public destroyComponent(componentId) {
    const comp = this.componentIdsMap.get(componentId);
    const indice = this.entry.indexOf(comp);
    console.log(comp);
    console.log(indice);
    this.entry.remove(indice);
    this.componentIdsMap.delete(componentId);
  }
}

