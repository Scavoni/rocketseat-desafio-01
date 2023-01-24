import { ChangeEvent, FormEvent, useState } from "react";
// import styles from "./App.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./App.module.css";

import { v4 as uuidv4 } from "uuid";
import "./global.css";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";

export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

function App() {
  const [itemName, setItemName] = useState("");

  const [listItems, setListItems] = useState<Task[]>([]);

  function handleNewItem(event: ChangeEvent<HTMLInputElement>) {
    setItemName(event.target.value);
  }

  function handleAddItem(event: FormEvent) {
    event.preventDefault();
    let completeItem = {
      id: uuidv4(),
      name: itemName,
      isCompleted: false,
    };

    setListItems([...listItems, completeItem]);
    setItemName("");
  }

  function handleDeleteItem(itemId: string) {
    const newItemList = listItems.filter((item) => item.id !== itemId);
    setListItems(newItemList);
  }

  function handleChangeCheckItem(itemId: string) {
    const newItemList2 = listItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setListItems(newItemList2);
  }
  return (
    <div>
      <Header />
      <main>
        <form onSubmit={handleAddItem} className={styles.createItem}>
          <input
            placeholder="Adicione uma nova tarefa"
            type="text"
            onChange={handleNewItem}
            value={itemName}
          />
          <button type="submit">
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
        <List
          tasks={listItems}
          handleDeleteItem={handleDeleteItem}
          handleChangeCheck={handleChangeCheckItem}
        />
      </main>
    </div>
  );
}

export default App;
