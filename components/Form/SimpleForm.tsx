//components/Form/SimpleForm.tsx
import SubmitButton from "./Button";
import React from "react";

interface FormProps {
  children?: React.ReactNode;
  submitRoute: string;
  className?: string;
  buttonText?: string;
  formLabel: string;
  buttonLabel: string;
}

const SimpleForm: React.FC<FormProps> = ({ children, ...props }) => {
  const submitForm = () => {};

  return (
    <form action="/submit" className="center-div" aria-label={props.formLabel}>
      <label className="text-xl">Name</label>
      <input
        className="border-2 border-black rounded-md p-2 m-2"
        type="text"
        name="name"
        required
      />
      <label className="text-xl">Email</label>
      <input
        className="border-2 border-black rounded-md p-2 m-2"
        type="email"
        name="email"
        required
      />
      <label className="text-xl">Message</label>
      <textarea
        className="border-2 border-black rounded-md p-2 m-2"
        name="Message"
      />
      <SubmitButton onClick={null} label={props.buttonLabel} isSubmit>
        {props.buttonText}
      </SubmitButton>
    </form>
  );
};

export default SimpleForm;
