"use client";

import { useRef, useReducer, useCallback } from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import List from "@/components/List";
import { mockTodos } from "@/data/mockData";
import { Todo } from "@/types/todo";
import { todoReducer } from "@/components/todoReducer";

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
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </main>
  );
}
