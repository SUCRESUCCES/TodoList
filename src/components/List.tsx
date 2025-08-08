import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className="flex flex-col gap-5 px-2 sm:px-4 md:px-6">
      <h4 className="text-lg sm:text-l font-semibold mb-2 tracking-wide">
        Todo List🌱
      </h4>
      <input
        className="w-full border-b border-gray-300 py-[15px] 
        focus:outline-none focus:border-blue-500
        placeholder:text-sm
        text-base"
        aria-label="검색창"
        placeholder="검색어를 입력하세요"
      />
      <div className="flex flex-col gap-5">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
