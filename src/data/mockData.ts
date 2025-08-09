import { Todo } from "@/types/todo";

export const mockTodos: Todo[] = [
  {
    id: 1,
    content: "타입스크립트",
    isDone: true,
    createdAt: new Date().getTime(),
  },
  {
    id: 2,
    content: "넥스트",
    isDone: false,
    createdAt: new Date().getTime(),
  },
  {
    id: 3,
    content: "코딩테스트 준비",
    isDone: true,
    createdAt: new Date().getTime(),
  },
  {
    id: 4,
    content: "SQLD",
    isDone: true,
    createdAt: new Date().getTime(),
  },
];
