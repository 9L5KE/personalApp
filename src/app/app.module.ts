import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { UpperCasePipe } from './utils/pipes/upper-case.pipe';
import { HighLightDirective } from './utils/directives/high-light.directive';
import { LowercasePipe } from './utils/pipes/lowercase.pipe';
import { ReturnNamePipe } from './utils/pipes/return-name.pipe';
import { OnFocusInitDirective } from './utils/directives/on-focus-init.directive';
import { UsuarioServiceService } from './services/usuario-service.service';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListarUsuariosComponent,
    UpperCasePipe,
    HighLightDirective,
    LowercasePipe,
    ReturnNamePipe,
    OnFocusInitDirective,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'personalApp'),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [UsuarioServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
