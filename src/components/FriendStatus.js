import useFriendStatus from "../hooks/useFriendStatus";

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "loading";
  }
  return isOnline ? "Online" : "Offline";
}

export default FriendStatus;
