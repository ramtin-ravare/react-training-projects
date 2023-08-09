import Button from "../Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const { balance, name, image, id } = friend;
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected && "selected"}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} {balance * -1}€
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {" "}
          {name} owes you {balance}€
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
