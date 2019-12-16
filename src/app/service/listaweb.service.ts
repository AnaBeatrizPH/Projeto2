import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //objeto que entra em contato com o site

@Injectable({
  providedIn: 'root'
})
export class ListawebService {
  // injeção de dependencia 

  constructor(private http: HttpClient) { }

  public obterTarefas(){
    return this.http.get("http://www.professorisidro.com.br/tarefas.php");
  }


}
