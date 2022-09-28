import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { InputFields, navigation } from "./type-alias";

const AuthForm: React.FC<{
  title: string;
  navigation: navigation;
  formInputs: InputFields[];
  onChangeHndler: (value: string, index: number) => void;
  buttons: {
    title: string;
    onClick: () => void;
  }[];
}> = ({ title, formInputs, buttons, navigation, onChangeHndler }) => {
  return (
    <div className="form-container">
      <h1>{title}</h1>
      <div className="form-details">
        <form>
          <div>
            {formInputs.map((input, index) => {
              return (
                <div className="input-container" key={input.label}>
                  <div className="input-row">
                    <label htmlFor="text">{input.label} :</label>
                    <input
                      type={input.type}
                      placeholder={input.name}
                      onChange={(e) => {
                        onChangeHndler(e.target.value, index);
                      }}
                    />
                  </div>
                  <div className="error-message">
                    <span>{input.errorMessage}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {buttons.map((button) => {
              return (
                <div key={button.title} className="button-container">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      button.onClick();
                    }}
                  >
                    {button.title}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="switch-link">
            {navigation.navigationText}
            <Link to={navigation.navigationPath}> {navigation.navigation}</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
