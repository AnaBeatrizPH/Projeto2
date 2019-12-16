import { Component, OnInit } from '@angular/core';
import {Tarefa} from '../Tarefass';
// importando o serviço que vai conversar com o site 
import {ListawebService} from '../service/listaweb.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit 
{

  //objeto de negócios
  //minhaTarefa: Tarefa;

  minhaTarefa: Tarefa[];  // esse vetor será preenchido atraves do site

  //injetando o serviço
  
  
  constructor(private servicoLista: ListawebService) { 
  
  
  }

  ngOnInit() 
  {
    console.log("Chamando a função que recupera a lista");
    this.obterTodasAsTarefas();
    console.log(this.minhaTarefa);



  }
  
  public obterTodasAsTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado: Tarefa[])=>{
    this.minhaTarefa = resultado;  

    });
  }

}
