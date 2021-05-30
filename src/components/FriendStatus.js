import { useEffect, useState } from "react";
import ChatAPI from "../api/chat";

function FriendStatus(props) {
  const id = props.friend.id;
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline);
  };

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(id, handleStatusChange);
    return () => {
      console.log(`unsubscribe ${id}`);
      ChatAPI.unsubscribeToFriendStatus(id);
    };
  }, [id]);

  if (isOnline === null) {
    return "loading";
  }
  return isOnline ? "Online" : "Offline";
}

export default FriendStatus;
