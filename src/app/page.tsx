"use client";

import { useMemo } from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";
import { useTodoManager } from "@/hooks/useTodoManager";
import { useDate } from "@/hooks/useDate";
import { TodoStateContext, TodoDistpatchContext } from "@/contexts/TodoContext";

export default function Home() {
  // Vercel 연동 테스트
  const { todos, actions } = useTodoManager();

  const { selectedDate, onPrevDay, onNextDay, onToday, onSelectDate } =
    useDate();

  const filteredTodos = useMemo(() => {
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
        onSelectDate={onSelectDate}
      />
      <TodoStateContext.Provider value={filteredTodos}>
        <TodoDistpatchContext.Provider value={actions}>
          <Editor selectedDate={selectedDate} />
          <List />
        </TodoDistpatchContext.Provider>
      </TodoStateContext.Provider>
    </main>
  );
}
