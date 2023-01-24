import { ListItem } from "../ListItem/ListItem";

import style from "./List.module.css";
import { Task } from "./../../App";
import { TbClipboardText } from "react-icons/tb";

interface Props {
  tasks: Task[];
  handleDeleteItem: (itemId: string) => void;
  handleChangeCheck: (itemId: string) => void;
}

export function List({ tasks, handleDeleteItem, handleChangeCheck }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={style.tasks}>
      <div className={style.header}>
        <p>Tarefas Criadas </p>
        <span>{tasksQuantity}</span>
        <p className={style.textPurple}>Tarefas Concluidas</p>
        <span>
          {completedTasks} de {tasksQuantity}
        </span>
      </div>

      <div className={style.list}>
        {tasks.map((item) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              isCompleted={item.isCompleted}
              handleDeleteItem={handleDeleteItem}
              handleChangeCheck={handleChangeCheck}
            />
          );
        })}
        {tasks.length <= 0 && (
          <section className={style.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
