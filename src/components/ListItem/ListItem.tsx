import styles from "./ListItem.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface PropsTask {
  id: string;
  name: string;
  isCompleted: boolean;
  handleDeleteItem: (itemId: string) => void;
  handleChangeCheck: (itemId: string) => void;
}

export function ListItem({
  id,
  name,
  isCompleted,
  handleDeleteItem,
  handleChangeCheck,
}: PropsTask) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => handleChangeCheck(id)}
      >
        {isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={isCompleted ? styles.textCompleted : ""}>{name}</p>

      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteItem(id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
    // <div className={style.ListItem}>
    //   <input
    //     type="checkbox"
    //     name=""
    //     id=""
    //     checked={isCompleted}
    //     onChange={() => handleChangeCheck(id)}
    //   />
    //   <p>{name}</p>
    //   <button onClick={() => handleDeleteItem(id)}>remove</button>
    // </div>
  );
}
