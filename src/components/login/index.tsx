import React, { useState } from "react";
import { emailRegex, passwordRegex } from "../../scripts/constant";
import AuthForm from "../common/auth-form";

function LoginContainer() {
  const textFieldChangeHandler = (value: string, index: number) => {
    setLoginForm((prev) => {
      const prevForm = [...prev];
      const currentTextField = prevForm[index];
      currentTextField.value = value;
      const getValidError = currentTextField.getValidation(
        currentTextField.value
      );
      const { err, isValid } = getValidError;
      currentTextField.errorMessage = err;
      currentTextField.isValid = isValid;
      return prevForm;
    });
  };
  const buttons = [
    {
      title: "Login",
      onClick: () => {
        console.log("userdetails: ", loginForm);
        if (true) {
          const formData: any = {};
          loginForm.map(({ name, value }) => {
            console.log("value: ", value);
            console.log("name: ", name);
            formData[name] = value;
          });
        }
      },
    },
  ];
  const [loginForm, setLoginForm] = useState([
    {
      required: true,
      label: "Email",
      name: "email",
      type: "email",
      value: "",
      isValid: true,
      errorMessage: "",
      getValidation: (value: string) => {
        if (!emailRegex.test(value)) {
          return { err: "Invalid email", isValid: false };
        }
        return { err: "", isValid: true };
      },
    },
    {
      required: true,
      label: "Password",
      name: "password",
      type: "password",
      minlength: "6",
      isValid: true,
      value: "",
      errorMessage: "",
      getValidation: (value: string) => {
        console.log("value.length: ", value.length);
        if (passwordRegex.test(value) && value.length >= 8) {
          return { err: "", isValid: true };
        }
        return {
          err: "password should be greater than 8 character",
          isValid: false,
        };
      },
    },
  ]);
  //   const formInputs = [
  //     {
  //       label: "Email",
  //       placeholder: "User Email",
  //       type: "email",
  //       getValidation: (value: string) => {
  //         if (!emailRegex.test(value)) {
  //           return ["Invalid email", false];
  //         }
  //         return ["", true];
  //       },
  //       onchange: (email: string) => {
  //         setLoginDetails((prev) => {
  //           const details = {
  //             email: email,
  //             pass: prev.pass,
  //           };
  //           return details;
  //         });
  //       },
  //     },
  //     {
  //       label: "Password",
  //       type: "password",
  //       placeholder: "Password",
  //       getValidation: (value: string) => {
  //         if (passwordRegex.test(value) && value.length >= 8) {
  //           return ["", true];
  //         }
  //         return ["Invalid password", false];
  //       },
  //       onchange: (pass: string) => {
  //         setLoginDetails((prev) => {
  //           const details = {
  //             email: prev.email,
  //             pass: pass,
  //           };
  //           return details;
  //         });
  //       },
  //     },
  //   ];
  const navigation = {
    navigationText: "don't have accoun? ",
    navigationPath: "/auth/sign-up",
    navigation: "signUp here",
  };
  return (
    <div>
      <AuthForm
        title="Login"
        navigation={navigation}
        onChangeHndler={textFieldChangeHandler}
        formInputs={loginForm}
        buttons={buttons}
      />
    </div>
  );
}

export default LoginContainer;
