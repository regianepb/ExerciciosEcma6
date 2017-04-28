class Tarefa{
    construtor(){
        console.log("tarefa instanciada!");        
    }

    mostrarId(){
        console.log(23);
    }

    static carregarTodas(){
        console.log("carregando todas as tarefas...");
    }
}

console.log(typeof Tarefa); //function
let tarefa = new Tarefa(); //"tarefa instanciada"

tarefa.mostrarId();//23
Tarefa.carregarTodas();//"carregando tarefas as tasks..."