function AppName() {
  return (
    <div className="text-center mb-8 sm:mb-10 flex flex-col items-center">
      <div className="bg-[#f59e0b] shadow-sm h-10 w-10 flex items-center justify-center rounded-2xl">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="3"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-check"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </div>
      <div className="mb-2 mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9aa3af]">Simple task planner</div>
      <div className="text-3xl font-bold tracking-[-0.04em] text-[#1f2937] sm:text-4xl">My To-Do List</div>
      <div className="mt-2 text-sm text-[#8B95A3]">Add a task, choose a date, and stay on track.</div>
    </div>
  );
}
export default AppName;
