async function loadAuthUserData(setAuthUserData) {
  
  const data = await localStorage.getItem("authUser");
  const currentUser = JSON.parse(data);
  setAuthUserData(currentUser);
}


async function handleLogout(navigateCallback){
  await localStorage.removeItem('authUser')
  navigateCallback()
}
export default {
  loadAuthUserData,
  handleLogout,
};
