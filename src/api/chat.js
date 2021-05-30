import Random from "../utils/random";

class ChatAPI {
  static friendsHandlerMap = new Map();

  static init() {
    setInterval(() => {
      // console.log(
      //   `the size of friendsHandlerMap is ${this.friendsHandlerMap.size}`
      // );
      this.friendsHandlerMap.forEach((handler, key) => {
        // console.log(`${key}'s handler is ${typeof handler}`);
        handler({ isOnline: Random.randomInteger(0, 1) === 1 });
      });
    }, 10 * 1000);
  }

  static subscribeToFriendStatus(friendID, handler) {
    // console.log(`subscribe ${friendID}, ${typeof handler}`);
    this.friendsHandlerMap.set(friendID, handler);
  }

  static unsubscribeToFriendStatus(friendID) {
    this.friendsHandlerMap.set(friendID, null);
  }
}

console.log("ChatAPI init");
ChatAPI.init();
export default ChatAPI;
