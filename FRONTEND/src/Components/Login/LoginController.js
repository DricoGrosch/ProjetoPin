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
      alert("nao tem usuario man");
    } else {
      const user = await response.json();
      localStorage.setItem("authUser", user);
    }
  } catch (e) {
    console.log(e);
  }
  // navigateCallback();
}

export default {
  handleAuth,
};
