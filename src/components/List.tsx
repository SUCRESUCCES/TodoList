import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";
import { useTodos } from "@/contexts/TodoContext";

const List = () => {
  const todos = useTodos();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredTodos = () => {
    if (!search) {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredTodos();

  // useMemo로 집계 (todos 변경시에만 재계산)
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="flex flex-col gap-5 px-2 sm:px-4 md:px-6">
      <h4 className="text-lg sm:text-lg font-semibold mb-2 tracking-wide">
        Todo List🌱
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col items-center">
          <span className="text-blue-600 text-sm font-medium mb-1">
            전체 할 일
          </span>
          <span className="text-xl font-semibold text-gray-800">
            {totalCount}
          </span>
        </div>
        <div className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col items-center">
          <span className="text-blue-600 text-sm font-medium mb-1">
            완료한 일
          </span>
          <span className="text-xl font-semibold text-gray-800">
            {doneCount}
          </span>
        </div>
        <div className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col items-center">
          <span className="text-blue-600 text-sm font-medium mb-1">
            남은 일
          </span>
          <span className="text-xl font-semibold text-gray-800">
            {notDoneCount}
          </span>
        </div>
      </div>

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
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default List;
