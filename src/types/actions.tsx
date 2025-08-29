export type TodoActions = {
  onCreate: (content: string) => void;
  onUpdate: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
  onDelete: (id: number) => void;
};
