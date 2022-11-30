// pages/contact.tsx

import SimpleForm from "../components/Form/SimpleForm";

export default function Contact() {
  return (
    <div>
      <h1 className="bold text-4xl text-center"> Form </h1>
      <SimpleForm buttonText={"Submit"} onSubmit={undefined}></SimpleForm>
    </div>
  );
}
