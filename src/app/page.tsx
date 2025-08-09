"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";
import { mockTodos } from "@/data/mockData";
import { Todo } from "@/types/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);

  return (
    <main className="animate-fade-in w-full max-w-lg mx-auto flex flex-col gap-4 p-4">
      <Header />
      <Editor />
      <List todos={todos} />
    </main>
  );
}
