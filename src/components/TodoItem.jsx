import { useState } from "react";
function TodoItem({ todoname, tododate, deleteHendlar, idx }) {
  const [completed, setCompleted] = useState(false);
  return (
    
      <div className="flex items-center gap-3 rounded-2xl border border-[#e6eaf0] bg-white px-4 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#f5c66d] hover:shadow-md sm:px-5 w-full">
      <button
        onClick={() => setCompleted(!completed)}
        className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
          completed
            ? "border-[#22a06b] bg-[#22a06b] text-white"
            : "border-[#c6ced8] text-transparent hover:border-[#f59e0b]"
        }`}
      >
        {completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </button>
      <div className="min-w-0 flex-1">
        <div className={`${completed ? "line-through" : "no-underline"} truncate text-sm font-medium sm:text-[15px] text-[#374151] capitalize`}>
          {todoname}
        </div>
        <div className="mt-1 text-xs text-[#9aa3af]">{tododate}</div>
      </div>
      <div>
        <button
          onClick={() => deleteHendlar(idx)}
          className="flex size-8 items-center justify-center rounded-lg text-[#a6afbb] transition hover:bg-[#fff1f2] hover:text-[#e25563]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trash2 lucide-trash-2"
            aria-hidden="true"
          >
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
            <path d="M3 6h18"></path>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
