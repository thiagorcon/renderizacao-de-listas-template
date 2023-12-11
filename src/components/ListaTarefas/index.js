import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const listaDeTarefasIncial = [
    { id: 1, titulo: "varrer casa" },
    { id: 2, titulo: "limpar vidro" },
    { id: 3, titulo: "molhar plantas" },
  ];
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState(listaDeTarefasIncial);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  // ADICIONAR NO INICIO
  const adicionaTarefa = () => {
    if (novaTarefa === "") {
    alert('favor digitar algo')
    } else {
      const novaTarefaComId = {
        id: Date.now(),
        titulo: novaTarefa,
      };
      const novaLista = [...listaDeTarefas];
      novaLista.unshift(novaTarefaComId);
      //Ou sem o unshift --- const novaLista = [novaTarefa , ...listaDeTarefas]

      setListaDeTarefas(novaLista);
      //console.log(novaLista);
      // -- para limpar o input
      setNovaTarefa("");
    }
  };
  // ADICIONAR NO FINAL
  // const adicionaTarefa = () => {
  //   const novaLista = [...listaDeTarefas]
  //   novaLista.push(novaTarefa)
  //  Ou sem o push    --- const novaLista = [...listaDeTarefas , novaTarefa]
  //   setListaDeTarefas(novaLista)
  //   //console.log(novaLista);
  // };

  const removeTarefa = (tarefaRemovida) => {
    //alert(tarefaRemovida);
    const listaFiltrada = listaDeTarefas.filter((tarefa) => {
      if (tarefa.id !== tarefaRemovida.id) {
        return tarefa;
      }
    });
    setListaDeTarefas(listaFiltrada);
  };

  // Outra opção
  // const listaDeTarefasMapeadas = listaDeTarefas.map((tarefa) => {
  //   return (
  //     <Tarefa>
  //       <p>{tarefa}</p>
  //       <RemoveButton>
  //         <img src={bin} alt="" width="50px" />
  //       </RemoveButton>
  //     </Tarefa>
  //   );
  // });

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {listaDeTarefas.map((tarefa) => {
            return (
              <Tarefa key={tarefa.id}>
                <p>{tarefa.titulo}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="50px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
