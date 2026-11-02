import { useRef, useState } from "react";

function AddTodo({ setItems, itemse }) {
  let [date, setdate] = useState("");
  let [work, setwork] = useState("");
  const textRef = useRef(null);
  const dateRef = useRef(null);

  const dateWorkHendlar = (dates, works) => {
    let temp = [...itemse, { name: works, dudate: dates }];
    setItems(temp);
    setdate("");
    setwork("");
  };
  return (
    <div className="mb-8 grid gap-3 rounded-2xl border border-[#e5e9ef] bg-[#f8fafc] p-3 sm:grid-cols-[1fr_auto_auto] sm:items-center w-full">
      <label className="flex min-w-0 items-center gap-2 rounded-xl border border-[#dfe5ec] bg-white px-3.5 py-3 shadow-sm focus-within:border-[#f59e0b] focus-within:ring-2 focus-within:ring-[#f59e0b]/15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-plus shrink-0 text-[#f59e0b]"
          aria-hidden="true"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        <input
          ref={textRef}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#aab3bf]"
          placeholder="Enter a new task"
          type="text"
          value={work}
          onChange={(ework) => {
            setwork(ework.target.value);
          }}
          onKeyDown={(evd) => {
            if (evd.key === "Enter") {
              date === "" || work === ""
                ? dateRef.current.focus()
                : dateWorkHendlar(date.split("-").reverse().join("-"), work);
            }
          }}
        />
      </label>
      <label className="flex items-center gap-2 text-[#697586] rounded-xl border border-[#dfe5ec] bg-white px-3.5 py-3 shadow-sm focus-within:border-[#f59e0b] focus-within:ring-2 focus-within:ring-[#f59e0b]/15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-calendar-days text-[#f59e0b]"
          aria-hidden="true"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
          <path d="M8 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 18h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M16 18h.01"></path>
        </svg>
        <input
          ref={dateRef}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none [&::-webkit-calendar-picker-indicator]:hidden"
          type="date"
          value={date}
          onChange={(edate) => {
            setdate(edate.target.value);
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              date === "" || work === ""
                ? textRef.current.focus()
                : dateWorkHendlar(date.split("-").reverse().join("-"), work);
            }
          }}
        />
      </label>
      <div className="">
        <button
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d97706] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:ring-offset-2 w-full sm:w-fit"
          onClick={() => {
            date === "" || work === null
              ? ""
              : dateWorkHendlar(date.split("-").reverse().join("-"), work);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-plus"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Add task
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
