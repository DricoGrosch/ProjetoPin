async function handleAuth({ username, password }, navigateCallback) {
  // chama a api, se der boa seta na storage
  const init = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };
  try {
    const response = await fetch("/get/user", init);
    if (response.status != 200) {
      alert("User not found");
    } else {
      const data = await response.json();
      const user = JSON.parse(data)
      user.isAuthenticated = true
      localStorage.setItem("authUser", JSON.stringify(user));
      navigateCallback();
    }
  } catch (e) {
    console.log(e);
  }
   
}

export default {
  handleAuth,
};
