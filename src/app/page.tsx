"use client";

import { createContext, useContext, useMemo } from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";
import { Todo } from "@/types/todo";
import { useTodoManager } from "@/hooks/useTodoManager";
import { useDate } from "@/hooks/useDate";
import { TodoActions } from "@/types/actions";

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
  const { todos, actions } = useTodoManager();

  const { selectedDate, onPrevDay, onNextDay, onToday } = useDate();

  const filterdTodos = useMemo(() => {
    return todos.filter((todo) => {
      const todoDate = new Date(todo.createdAt).toDateString();

      const targetDate = selectedDate.toDateString();
      return todoDate === targetDate;
    });
  }, [todos, selectedDate]);

  return (
    <main className="animate-fade-in w-full max-w-lg mx-auto flex flex-col gap-4 p-4">
      <Header
        selectedDate={selectedDate}
        onPrevDay={onPrevDay}
        onNextDay={onNextDay}
        onToday={onToday}
      />
      <TodoStateContext.Provider value={filterdTodos}>
        <TodoDistpatchContext.Provider value={actions}>
          <Editor selectedDate={selectedDate} />
          <List />
        </TodoDistpatchContext.Provider>
      </TodoStateContext.Provider>
    </main>
  );
}
