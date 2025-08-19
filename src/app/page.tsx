"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";
import { mockTodos } from "@/data/mockData";
import { Todo } from "@/types/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const idRef = useRef<number>(3);

  const onCreate = (content: string) => {
    const newTodo: Todo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      createdAt: new Date().getTime(),
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const onUpdate = (targetId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onEdit = (targetId: number, newContent: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId
          ? { ...todo, content: newContent, createdAt: Date.now() }
          : todo
      )
    );
  };
  return (
    <main className="animate-fade-in w-full max-w-lg mx-auto flex flex-col gap-4 p-4">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onEdit={onEdit} />
    </main>
  );
}
