import { useEffect, useState } from "react";
import ChatAPI from "../api/chat";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline);
  };

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      console.log(`unsubscribe ${friendID}`);
      ChatAPI.unsubscribeToFriendStatus(friendID);
    };
  }, [friendID]);
  return isOnline;
}

export default useFriendStatus;
