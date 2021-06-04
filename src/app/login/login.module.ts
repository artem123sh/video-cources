import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [IfAuthenticatedDirective, LoginComponent],
  exports: [IfAuthenticatedDirective],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, FormsModule, LoginRoutingModule],
})
export class LoginModule {}
