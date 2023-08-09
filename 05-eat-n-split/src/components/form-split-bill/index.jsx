import Button from "../Button";
import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  function handleBillInput(e) {
    let value = +e.target.value > 0 ? +e.target.value : 0;
    e.target.value = null;
    setBill(value);
  }
  function handlePaidByUser(e) {
    let value = +e.target.value > 0 ? +e.target.value : 0;
    value = value > bill ? paidByUser : value;
    e.target.value = null;
    setPaidByUser(value);
  }

  return (
    <div>
      <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
        <h2>SPLIT A BILL WITH {selectedFriend.name.toUpperCase()}</h2>
        <label>💰 Bill value</label>
        <input
          value={bill}
          onChange={(e) => handleBillInput(e)}
          type="number"
        />
        <label>🧍‍♂️ Your expense</label>
        <input
          value={paidByUser}
          onChange={(e) => handlePaidByUser(e)}
          type="number"
        />
        <label>👨🏻‍🤝‍👨🏻 {selectedFriend.name}'s expense:</label>
        <input disabled value={paidByFriend} type="number" />
        <label>🤑 Who is paying th bill? </label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
      </form>
    </div>
  );
}
