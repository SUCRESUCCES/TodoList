"use client";

import {
  useRef,
  useReducer,
  useCallback,
  createContext,
  useContext,
} from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";
import { mockTodos } from "@/data/mockData";
import { Todo } from "@/types/todo";
import { todoReducer } from "@/components/todoReducer";

type TodoContextValue = {
  todos: Todo[];
  onCreate: (content: string) => void;
  onUpdate: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
  onDelete: (id: number) => void;
};

export const TodoContext = createContext<TodoContextValue | null>(null);

export function useTodoContext() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("TodoContext.Provider 안에서만 써야 함");
  return ctx;
}

export default function Home() {
  const [todos, dispatch] = useReducer(todoReducer, mockTodos);
  const idRef = useRef<number>(
    Math.max(0, ...mockTodos.map((todo) => todo.id)) + 1
  );

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

  return (
    <main className="animate-fade-in w-full max-w-lg mx-auto flex flex-col gap-4 p-4">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onEdit,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </main>
  );
}
