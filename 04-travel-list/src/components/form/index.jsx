import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity: quantity,
      id: Date.now(),
      packed: false,
    };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  function handleQuantity(e) {
    setQuantity(+e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={handleDescription}
        type="text"
        placeholder="items..."
      />
      <button>add</button>
    </form>
  );
}
