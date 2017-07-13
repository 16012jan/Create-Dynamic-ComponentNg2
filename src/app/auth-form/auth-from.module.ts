import {NgModule} from '@angular/core';
import {AuthFormComponent} from './auth-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
  ],
  exports: [
    AuthFormComponent,
  ],
  entryComponents: [
    AuthFormComponent
  ]
})
export class AuthFormModule {}
