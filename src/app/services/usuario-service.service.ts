import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Usuario } from '../interfaces/usuario';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHRQHCXopV_B_IV2ZfnnLJoMiZBKIZ8Vw",
  authDomain: "personalapp-8185f.firebaseapp.com",
  projectId: "personalapp-8185f",
  storageBucket: "personalapp-8185f.appspot.com",
  messagingSenderId: "85388357483",
  appId: "1:85388357483:web:d4219f49760bf1e46d662e"
};

const firebase= require("firebase");
require("firebase/firestore");

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  db:any
  constructor() { 
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      this.db=firebase.firestore();
  }
  agregausuario()
  {
    let nuevo_usuario: Usuario= {
      nombre:'Luizzz',
      apellido_paterno:'Florezz',
      apellido_materno:'Florezz',
      activo: true,
      edad:34,
      fecha_registro: new Date()
    }


  this.db.collection("usuarios").add(nuevo_usuario)
.then((docRef) => {
    console.log("Documento escrito con el ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error agregando el documento: ", error);
});

}
