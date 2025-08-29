"use client";

import { createContext, useContext, useState } from "react";
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

  return (
    <main className="animate-fade-in w-full max-w-lg mx-auto flex flex-col gap-4 p-4">
      <Header
        selectedDate={selectedDate}
        onPrevDay={onPrevDay}
        onNextDay={onNextDay}
        onToday={onToday}
      />
      <TodoStateContext.Provider value={todos}>
        <TodoDistpatchContext.Provider value={actions}>
          <Editor />
          <List />
        </TodoDistpatchContext.Provider>
      </TodoStateContext.Provider>
    </main>
  );
}
