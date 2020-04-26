async function loadAuthUserData(setAuthUserData) {
  
  const data = await localStorage.getItem("authUser");
  const currentUser = JSON.parse(data);
  setAuthUserData(currentUser);
}

export default {
  loadAuthUserData,
};
