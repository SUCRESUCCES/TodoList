export type TodoActions = {
  onCreate: (content: string, targetDate: Date) => void;
  onUpdate: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
  onDelete: (id: number) => void;
};
