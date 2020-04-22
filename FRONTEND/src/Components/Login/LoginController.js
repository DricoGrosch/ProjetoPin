async function handleAuth({ username, password }, navigateCallback) {
  // chama a api, se der boa seta na storage
  const user = { username, password };
  debugger
  localStorage.setItem("authUser", JSON.stringify(user));
  navigateCallback();
}

export default {
  handleAuth,
};
