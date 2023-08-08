export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const totalNum = items.length;
  const packedNum = items.reduce((acc, c) => (c.packed ? acc + 1 : acc), 0);
  const percentage = Math.round((packedNum / totalNum) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${totalNum} items on your list, and you already packed ${packedNum} (${percentage} %)`}
      </em>
    </footer>
  );
}
