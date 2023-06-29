const emailValid = (email) => {
  const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  if (!emailRegex.test(email)) {
    return false
  }
  return true
}
const passwordValid = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/
  if (!passwordRegex.test(password)) {
    return false
  }
  return true
}
const nicknameValid = (nickname) => {
  if (!nickname) {
    return false
  }
  return true
}

export {
  emailValid,
  passwordValid,
  nicknameValid
}
