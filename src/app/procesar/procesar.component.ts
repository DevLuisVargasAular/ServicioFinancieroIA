import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../interfaces/interface.respuesta';

@Component({
  selector: 'app-procesar',
  templateUrl: './procesar.component.html',
  styleUrls: ['./procesar.component.css']
})
export class ProcesarComponent  {
 url:string= "" ;
 respuesta: any = ""; 
 link : any = "https://cyber.contabilidadonline.com/rep/";
 archivo : any = "";
 loading :boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  procesarArchivo() {
    const archivoValido:any = this.archivo.trim().length>= 6 && this.archivo.trim().length<= 10 &&this.archivo.trim()!='';
    if(!archivoValido){
      alert("el archivo no es valido")
      return;
    }
    
    const formData = new FormData();
    formData.append('url', `${this.link}${this.archivo}.xls`);
    console.log(formData.get('url'))

    this.loading = true;

    this.http.post('http://190.147.38.91:1002/ServiceIA/procesarArchivoUrl', formData, { responseType: 'text' })
      .subscribe(
        (data) => {
          // Asignar la respuesta del servicio a la propiedad 'respuesta'
          this.respuesta = data;
          this.loading = false;
         
        },
        (error) => {
          console.error('Error al llamar al servicio', error);
          this.loading = false;
        }
      );
  }
//   procesarArchivo() {
//     const formData = new FormData();
//     formData.append('url', this.url);
//     this.http.post<Respuesta>('http://localhost:1002/ServiceIA/procesarArchivoUrl', formData)
//     .subscribe({
//       next: (data) => {
//         // Maneja la respuesta del servicio aquí
//         this.respuesta = data;
//         console.log(data);
//       },
//       error: (error) => {
//         console.error('Error al llamar al servicio', error);
//       }
//     });
//   }

 }
