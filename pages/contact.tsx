// pages/contact.tsx

import React from "react";

import SimpleForm from "../components/Form/SimpleForm";
import SubmitButton from "../components/Form/SubmitButton";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.state = {};
  }

  submitForm = () => {
    window.location.href = "/submit";
  };

  render() {
    return (
      <div className="center-div">
        <h1 className="bold text-4xl text-center p-4"> Contact Us </h1>
        <SimpleForm
          buttonText={"Submit"}
          onSubmit={this.submitForm}
          formLabel={"Contact Form"}
          buttonLabel={"Submit Contact Form"}
        ></SimpleForm>
        <SubmitButton
          className="w-40"
          onClick={() => {
            window.location.href = "/";
          }}
          label={"Return To Home"}
        >
          Return To Home
        </SubmitButton>
      </div>
    );
  }
}

export default Contact;
