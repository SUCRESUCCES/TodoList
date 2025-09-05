"use client";

import { createContext, useContext } from "react";
import type { Todo } from "@/types/todo";
import type { TodoActions } from "@/types/actions";

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
