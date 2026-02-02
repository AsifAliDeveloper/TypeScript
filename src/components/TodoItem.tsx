import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      className={`flex justify-between items-center p-2 rounded cursor-pointer ${
        todo.completed ? "bg-green-100 line-through" : "bg-gray-100"
      }`}
    >
      <span>{todo.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
