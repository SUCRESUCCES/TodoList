import TodoItem from "./TodoItem";
import { Todo } from "@/types/todo";
import { useState } from "react";

interface ListProps {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onEdit?: (targetId: number, newContent: string) => void;
  onDelete?: (targetId: number) => void;
}

const List = ({ todos, onUpdate, onEdit, onDelete }: ListProps) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (!search) {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="flex flex-col gap-5 px-2 sm:px-4 md:px-6">
      <h4 className="text-lg sm:text-l font-semibold mb-2 tracking-wide">
        Todo List🌱
      </h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="w-full border-b border-gray-300 py-[15px] 
        focus:outline-none focus:border-blue-500
        placeholder:text-sm
        text-base"
        aria-label="검색창"
        placeholder="검색어를 입력하세요"
      />
      <div className="flex flex-col gap-5">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
