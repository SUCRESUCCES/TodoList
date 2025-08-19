import { Todo } from "@/types/todo";

const TodoItem = (props: Todo) => {
  return (
    <div className="flex items-center gap-4 py-2 px-3">
      <input
        readOnly
        checked={props.isDone}
        type="checkbox"
        aria-label="완료 체크"
      />
      <div className="flex-1 text-sm">{props.content}</div>
      <div className="text-sm text-gray-500 whitespace-nowrap">
        {new Date(props.createdAt).toLocaleDateString()}
      </div>
      <button
        className="text-sm text-gray-500 rounded px-2 py-1 
      cursor-pointer hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
        aria-label="삭제"
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
