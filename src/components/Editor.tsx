import { useState, useRef, useEffect } from "react";
import React from "react";
import { useTodoActions } from "@/contexts/TodoContext";

interface EditorProps {
  selectedDate: Date;
}

const Editor = ({ selectedDate }: EditorProps) => {
  const { onCreate } = useTodoActions();

  const [content, setContent] = useState<string>("");
  const contentRef = useRef<HTMLInputElement>(null);

  // 첫 렌더링 시 자동 포커스
  useEffect(() => {
    contentRef.current?.focus();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onsubmit();
    }
  };

  const onsubmit = () => {
    if (content.trim().length === 0) {
      contentRef.current?.focus();
      return;
    }
    onCreate(content.trim(), selectedDate);
    setContent("");
    contentRef.current?.focus();
  };
  return (
    <div className="flex gap-2.5 px-2">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder="새로운 Todo..."
        className="flex-1 px-4
        py-3
        border
        border-gray-300
        rounded
        text-sm
        sm:text-base
        placeholder:text-xs
        sm:placeholder:text-sm"
      />
      <button
        onClick={onsubmit}
        className="
      w-20  
      rounded 
      bg-blue-500
      text-sm sm:text-base
      text-white 
      cursor-pointer
      hover:bg-blue-600
      active:bg-blue-700
      focus:outline-none focus:ring-2 
      transition-colors duration-200 ease-in-out"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
