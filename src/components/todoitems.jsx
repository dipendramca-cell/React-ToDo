import TodoItem from "./TodoItem";
function Todoitems({ itemse, setItems }) {
  function deleteHendlar(indx) {
    setItems(itemse.filter((items, idx) => idx !== indx));
  }
  return (
    <>
    <div className="w-full flex flex-col gap-3">
      {itemse.map((item, idx) => (
        <TodoItem
          tododate={item.dudate}
          todoname={item.name}
          deleteHendlar={deleteHendlar}
          idx={idx}
        />
      ))}
      </div>
    </>
  );
}
export default Todoitems;
