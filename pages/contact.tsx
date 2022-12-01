// pages/contact.tsx

import React from "react";
import Router from "next/router";

import SimpleForm from "../components/Form/SimpleForm";
import SubmitButton from "../components/Form/SubmitButton";

class Contact extends React.Component {
  submitRoute: string;
  constructor(props) {
    super(props);

    this.submitRoute = "/submit";
    this.state = {};
  }

  render() {
    return (
      <div className="center-div">
        <h1 className="bold text-4xl text-center p-4"> Contact Us </h1>
        <SimpleForm
          buttonText={"Submit"}
          submitRoute={this.submitRoute}
          formLabel={"Contact Form"}
          buttonLabel={"Submit Contact Form"}
        ></SimpleForm>
        <SubmitButton
          className="w-40"
          onClick={() => {
            Router.push("/");
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
