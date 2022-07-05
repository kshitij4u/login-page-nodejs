function fetchUserInfo(email) {
  if (email === "a@gmail.com") {
    return {
      name: "A",
      email: email,
      password: "abcd123",
    };
  } else if (email === "b@gmail.com") {
    return {
      name: "B",
      email: email,
      password: "abcd132",
    };
  } else {
    return null;
  }
}

module.exports = {
  fetchUserInfo,
};
