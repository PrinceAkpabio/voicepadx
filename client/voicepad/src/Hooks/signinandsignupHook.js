import { Login, Register } from "../data-requests/auth";
export const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
export const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
export const useSignInFormChange = (errors, setErrors, setUsername, setPassword) => {
 const handleChange = (event) => {
  const { name, value } = event.target;

  switch (name) {
   case "username":
    errors.username =
     value.length < 5
      ? "Full Name must be at least 5 characters long!"
      : "";
    break;
   case "password":
    errors.password =
     value.length < 8
      ? "Password must be at least 8 characters long!"
      : "";
    break;
   default:
    break;
  }

  event.target.name === "username"
   ? setUsername({ [name]: value })
   : event.target.name === "password"
    ? setPassword({ [name]: value })
    : alert("Wrong form Selection");
 };
 return handleChange;
};
export const useSignInFormSubmit = (errors, username, password, setUser, history) => {
 const handleSubmit = (event) => {
  event.preventDefault();

  if (validateForm(errors)) {
   console.info("Valid Form");
  } else {
   console.error("Invalid Form");
  }

  try {
   Login(username.username, password.password).then((response) => {
    console.log("login object", response);

    if (response.accessToken) {
     setUser(response);
     history.push(`/profile/${username.username}`);
    }
   });
  } catch (error) {
   console.error("Error in creating User Docs", error);
  }
 };
 return handleSubmit;
};
export const useSignUpFormChange = (errors,setErrors,password,setUsername,setEmail,setPassword,setConfirmPassword) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "username":
        errors.username =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value === password.password ? "" : "Password doesn't match";
        break;
      default:
        break;
    }

    event.target.name === "username"
      ? setUsername({ [name]: value })
      : event.target.name === "email"
      ? setEmail({ [name]: value })
      : event.target.name === "password"
      ? setPassword({ [name]: value })
      : event.target.name === "confirmPassword"
      ? setConfirmPassword({ [name]: value })
      : alert("Wrong form Selection");
 };
 return handleChange;
};
export const useSignUpFormSubmit = (errors,username,email,password,history) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm(errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
    try {
      Register(username.username, email.email, password.password).then(
        (response) => {
          alert(response.data);
          history.push(`/login`);
        }
      );
    } catch (error) {
      console.error("Error in creating User Docs", error);
    }
 };
 return handleSubmit;
};