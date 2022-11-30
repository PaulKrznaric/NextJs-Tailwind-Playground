// pages/contact.tsx

import SimpleForm from "../components/Form/SimpleForm";
import SubmitButton from "../components/Form/SubmitButton";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bold text-4xl text-center p-4"> Contact Us </h1>
      <SimpleForm buttonText={"Submit"} onSubmit={undefined}></SimpleForm>
      <SubmitButton
        className="w-40"
        onClick={() => {
          window.location.href = "/";
        }}
        size="36"
      >
        Return To Home
      </SubmitButton>
    </div>
  );
}
