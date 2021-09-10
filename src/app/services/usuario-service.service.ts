import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { initializeApp } from 'firebase/app';
import { Usuario } from '../interfaces/usuario';

// Your web app's Firebase configuration

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  coleccion_usuarios : string='usuarios'
  constructor(private afs: AngularFirestore) {
   
    // Initialize Firebase
    //  firebase.initializeApp(firebaseConfig);
    //  this.db=firebase.firestore();
  }
  listarUsuarios() {
    return this.afs.collection(this.coleccion_usuarios).valueChanges();
  }
  agregarUsuario(usuario:Usuario){
    //this.afs.collection(this.coleccion_usuarios+'/'+usuario.usuario_id).add(usuario)
    usuario.usuario_id=this.agregarCpditoId(usuario)
    this.afs.doc(this.coleccion_usuarios+'/'+usuario.usuario_id).set(usuario)
  }
  editarUsuario(usuario:Usuario){
    this.afs.doc(this.coleccion_usuarios+'/'+usuario.usuario_id).update(usuario)
  }
  eliminarUsuario(usuario:Usuario){
    this.afs.doc(this.coleccion_usuarios+'/'+usuario.usuario_id).delete()
  }
  agregarCpditoId(usuario:Usuario){
    let fecha_actual_ms= new Date().getTime().toString()
    let letra_nombre=usuario.nombre.substring(0,1)
    let letra_ap_paterno=usuario.apellido_paterno.substring(0,1)
    let letra_ap_materno=usuario.apellido_materno.substring(0,1)
    return fecha_actual_ms+letra_nombre+letra_ap_paterno+letra_ap_materno

  }
  // agregausuario()
  // {
  //   let nuevo_usuario: Usuario= {
  //     nombre:'Luizzz',
  //     apellido_paterno:'Florezz',
  //     apellido_materno:'Florezz',
  //     activo: true,
  //     edad:34,
  //     fecha_registro: new Date()
  //   }

  /* this.db.collection("usuarios").add(nuevo_usuario)
.then((docRef) => {
    console.log("Documento escrito con el ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error agregando el documento: ", error);
});*/
}
