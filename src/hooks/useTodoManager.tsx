import { useReducer, useRef, useCallback, useEffect, useMemo } from "react";
import { todoReducer } from "@/components/todoReducer";
import { Todo } from "@/types/todo";
import { TodoActions } from "@/types/actions";

const TODO_STORAGE_KEY = "todos";

export function useTodoManager() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const idRef = useRef<number>(0);

  // 데이터 로드
  useEffect(() => {
    const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    if (storedTodos) {
      const parsedTodos: Todo[] = JSON.parse(storedTodos);
      dispatch({ type: "INIT", data: parsedTodos });
      idRef.current = Math.max(0, ...parsedTodos.map((todo) => todo.id)) + 1;
    } else {
      idRef.current = 1;
    }
  }, []);

  // 데이터 저장
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  const onCreate = useCallback((content: string) => {
    const newTodo: Todo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      createdAt: new Date().getTime(),
    };
    dispatch({ type: "CREATE", data: newTodo });
  }, []);

  const onUpdate = useCallback((targetId: number) => {
    dispatch({ type: "UPDATE", targetId });
  }, []);

  const onEdit = useCallback((targetId: number, newContent: string) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const onDelete = useCallback((targetId: number) => {
    dispatch({ type: "DELETE", targetId });
  }, []);

  const actions = useMemo<TodoActions>(
    () => ({
      onCreate,
      onUpdate,
      onEdit,
      onDelete,
    }),
    [onCreate, onUpdate, onEdit, onDelete]
  );

  return { todos, actions };
}
