import LOCALSTORAGE_ITEMS from "constants/local-storage-items"

const getUserData = () => {
  const userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEMS.USER_DATA));

  return {
    client: userData?.client || "",
    uid: userData?.uid || "",
    accessToken: userData?.accessToken || ""
  }
}

export default getUserData;
