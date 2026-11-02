function Contener({ children }) {
  return <div className="h-screen flex pt-12 justify-center p-4">
    <div className="bg-white/90 border h-fit border-white/80 rounded-3xl shadow-lg p-8 sm:p-10  max-w-4xl w-full flex flex-col items-center">{children}</div>
  </div>
}
export default Contener;
