import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((f) => (
        <Friend
          onSelection={onSelection}
          friend={f}
          key={f.id}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
