import { Todo } from "@/types/todo";

type Action =
  | { type: "CREATE"; data: Todo }
  | { type: "UPDATE"; targetId: number }
  | { type: "EDIT"; targetId: number; newContent: string }
  | { type: "DELETE"; targetId: number };

export function todoReducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.targetId
          ? { ...todo, content: action.newContent, createdAt: Date.now() }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
  }
}
