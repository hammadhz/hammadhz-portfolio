export const validation = (data) => {
  const { name, email, phone, message } = data;
  const errors = {
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    messageErr: "",
  };

  if (name === "" && email === "" && phone === "" && message === "") {
    errors.nameErr = "Please enter your name";
    errors.emailErr = "Please enter your email";
    errors.phoneErr = "Please enter your phone";
    errors.messageErr = "Please enter your message";
    return errors;
  } else if (name === "") {
    errors.nameErr = "Please enter your name";
    return errors;
  } else if (email === "") {
    errors.emailErr = "Please enter your email";
    return errors;
  } else if (phone === "") {
    errors.phoneErr = "Please enter your phone";
    return errors;
  } else if (message === "") {
    errors.messageErr = "Please enter your message";
    return errors;
  } else {
    return "";
  }
};
