import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from './interfaces/usuario';
import { UsuarioServiceService } from './services/usuario-service.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  usuarios_de_firestore: any[];

  constructor(
    private ngbModal: NgbModal,
    private usuario_service: UsuarioServiceService
  ) {
    this.usuarios_de_firestore = [];
  }

  ngOnInit() {
    this.usuario_service.listarUsuarios().subscribe((usuarios) => {
      this.usuarios_de_firestore = usuarios;
    });
  }

  ngAfterViewInit() {}
  // mostrarModalNuevoUsuario(modalNuevoUsuario:any)
  // {
  //   this.ngbModal.open(modalNuevoUsuario,{
  //     centered:true,
  //     size: "lg",
  //     scrollable: true,
  //     backdrop:"static"
  //   }).result.then(
  //     (result) =>{},
  //     (reason)=>{}
  //   );
  // }

  // recibirUsuario(usuario:Usuario){
  //   console.log("recibirUsuario()")
  //   this.lista_usuarios.push(usuario)
  //   this.ngbModal.dismissAll()
  // }
}
