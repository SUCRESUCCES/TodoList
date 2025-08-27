"use client";

import {
  useRef,
  useReducer,
  useCallback,
  createContext,
  useContext,
  useMemo,
} from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";
import { mockTodos } from "@/data/mockData";
import { Todo } from "@/types/todo";
import { todoReducer } from "@/components/todoReducer";
import { on } from "events";

type TodoActions = {
  onCreate: (content: string) => void;
  onUpdate: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
  onDelete: (id: number) => void;
};

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDistpatchContext = createContext<TodoActions | null>(null);

export function useTodos() {
  const ctx = useContext(TodoStateContext);
  if (!ctx) throw new Error("TodoContext.Provider 안에서만 써야 함");
  return ctx;
}

export function useTodoActions() {
  const ctx = useContext(TodoDistpatchContext);
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

  const actions = useMemo<TodoActions>(
    () => ({
      onCreate,
      onUpdate,
      onEdit,
      onDelete,
    }),
    [onCreate, onUpdate, onEdit, onDelete]
  );
  return (
    <main className="animate-fade-in w-full max-w-lg mx-auto flex flex-col gap-4 p-4">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDistpatchContext.Provider value={actions}>
          <Editor />
          <List />
        </TodoDistpatchContext.Provider>
      </TodoStateContext.Provider>
    </main>
  );
}
