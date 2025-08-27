import { Todo } from "@/types/todo";
import { useState, useEffect, memo } from "react";
import { useTodoActions } from "@/app/page";

const TodoItem = ({ id, content, isDone, createdAt }: Todo) => {
  const { onUpdate, onEdit, onDelete } = useTodoActions();

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);

  useEffect(() => {
    setEditContent(content);
  }, [content]);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onSave = () => {
    if (editContent.trim()) {
      onEdit(id, editContent);
    }
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-4 py-2 px-3">
      <input
        onChange={onChangeCheckbox}
        checked={isDone}
        type="checkbox"
        aria-label="완료 체크"
      />

      {isEditing ? (
        <input
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSave();
          }}
          autoFocus
          className="flex-1 text-sm border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
      ) : (
        <div
          className={`flex-1 text-sm break-words
        ${isDone ? "line-through text-gray-400" : "text-gray-900"}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {content}
        </div>
      )}
      <div className="text-sm text-gray-500 whitespace-nowrap">
        {new Date(createdAt).toLocaleDateString()}
      </div>

      {isEditing ? (
        <button
          onClick={onSave}
          className="text-sm text-blue-500 rounded px-2 py-1 
            cursor-pointer hover:text-blue-500 hover:bg-blue-100 transition-all duration-200"
          aria-label="저장"
        >
          저장
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm text-gray-500 rounded px-2 py-1 
            cursor-pointer hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
          aria-label="수정"
        >
          수정
        </button>
      )}

      <button
        onClick={() => onDelete(id)}
        className="text-sm text-gray-500 rounded px-2 py-1 
  cursor-pointer hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
        aria-label="삭제"
      >
        삭제
      </button>
    </div>
  );
};

export default memo(TodoItem);
