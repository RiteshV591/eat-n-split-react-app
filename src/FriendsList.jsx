import { Friend } from "./Friend";

export const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};
