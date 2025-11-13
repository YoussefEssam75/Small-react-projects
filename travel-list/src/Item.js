export default function Item({ item, onDeleteItem, onToggleItem }) {
  const handleToggle = () => {
    console.log("onToggleItem type:", typeof onToggleItem);
    console.log("onToggleItem value:", onToggleItem);

    if (onToggleItem && typeof onToggleItem === "function") {
      onToggleItem(item.id);
    } else {
      console.error("onToggleItem is not a function!");
    }
  };

  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handleToggle} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}> ❌ </button>
    </li>
  );
}
