import React, { useState } from "react";
import {
  contactRegex,
  emailRegex,
  passwordRegex,
} from "../../scripts/constant";
import AuthForm from "../common/auth-form";

const SignUpContainer = () => {
  const textFieldChangeHandler = (value: string, index: number) => {
    setSignUpForm((prev) => {
      const prevForm = [...prev];
      const currentTextField = prevForm[index];
      currentTextField.value = value;

      const { err, isValid } = currentTextField.getValidation(
        currentTextField.value
      );
      currentTextField.errorMessage = err;
      currentTextField.isValid = isValid;
      return prevForm;
    });
    console.log("userdetails: ", signUpForm);
  };
  // const [signUpDetails, setSignUpDetails] = useState({
  //   email: "",
  //   pass: "",
  //   contact: "",
  //   name: "",
  // });
  const buttons = [
    {
      title: "Sign Up",
      onClick: () => {
        console.log("userdetails:");
      },
    },
  ];
  const [signUpForm, setSignUpForm] = useState([
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
      label: "UserName",
      name: "name",
      type: "text",
      value: "",
      isValid: true,
      errorMessage: "",
      getValidation: (value: string) => {
        if (value.length < 3) {
          return {
            err: "Name should be greater than 3 letters",
            isValid: false,
          };
        }
        if (value.length > 10) {
          return { err: "Name should be less than 10 letters", isValid: false };
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
      value: "",
      isValid: true,
      errorMessage: "",
      getValidation: (value: string) => {
        if (passwordRegex.test(value) && value.length >= 8) {
          return {
            err: "",
            isValid: true,
          };
        }
        return {
          err: "Password must be 8 characters and contains atleast one number",
          isValid: false,
        };
      },
    },
    {
      required: true,
      label: "Contact No",
      name: "contact",
      value: "",
      type: "tel",
      isValid: true,
      errorMessage: "",

      getValidation: (value: string) => {
        if (!contactRegex.test(value)) {
          return {
            err: "invalid number",
            isValid: false,
          };
        }
        return {
          err: "",
          isValid: true,
        };
      },
    },
  ]);
  // const formInputs = [
  //   {
  //     label: "Name",
  //     placeholder: "User Name",
  //     type: "text",
  //     // onValidation: (name: string) => {
  //     //   if (name === "") {
  //     //     return {
  //     //       isValid: false,
  //     //       text: "Name can't be empty",
  //     //     };
  //     //   } else {
  //     //     return {
  //     //       isValid: true,
  //     //       text: "",
  //     //     };
  //     //   }
  //     // },
  //     onchange: (name: string) => {
  //       if (name !== "") {
  //         setSignUpDetails((prev) => {
  //           const details = {
  //             email: prev.email,
  //             pass: prev.pass,
  //             name: name,
  //             contact: prev.contact,
  //           };
  //           return details;
  //         });
  //       }
  //     },
  //   },
  //   {
  //     label: "email",
  //     placeholder: "User Email",
  //     type: "email",
  //     onchange: (email: string) => {
  //       setSignUpDetails((prev) => {
  //         const details = {
  //           email: email,
  //           pass: prev.pass,
  //           name: prev.name,
  //           contact: prev.contact,
  //         };
  //         return details;
  //       });
  //     },
  //   },
  //   {
  //     label: "contact",
  //     placeholder: "User Contact",
  //     type: "text",
  //     onchange: (contact: string) => {
  //       setSignUpDetails((prev) => {
  //         const details = {
  //           email: prev.email,
  //           pass: prev.pass,
  //           name: prev.name,
  //           contact: contact,
  //         };
  //         return details;
  //       });
  //     },
  //   },
  //   {
  //     label: "Password",
  //     type: "password",
  //     placeholder: "Password",
  //     onchange: (pass: string) => {
  //       setSignUpDetails((prev) => {
  //         const details = {
  //           email: prev.email,
  //           pass: pass,
  //           name: prev.name,
  //           contact: prev.contact,
  //         };
  //         return details;
  //       });
  //     },
  //   },
  // ];
  const navigation = {
    navigationText: "already have accoun? ",
    navigationPath: "/auth/login",
    navigation: "login here",
  };
  return (
    <div>
      <AuthForm
        title="Sign Up"
        onChangeHndler={textFieldChangeHandler}
        navigation={navigation}
        formInputs={signUpForm}
        buttons={buttons}
      />
    </div>
  );
};

export default SignUpContainer;
