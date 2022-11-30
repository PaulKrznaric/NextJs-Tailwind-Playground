//components/Form/SimpleForm.tsx
import SubmitButton from "./SubmitButton";

export default function SimpleForm({ buttonText, onSubmit }) {
  return (
    <form className="flex flex-col items-center">
      <label className="text-xl">Name</label>
      <input className="border-2 border-black rounded-md p-2 m-2" type="text" />
      <label className="text-xl">Email</label>
      <input
        className="border-2 border-black rounded-md p-2 m-2"
        type="email"
      />
      <label className="text-xl">Message</label>
      <textarea className="border-2 border-black rounded-md p-2 m-2" />
      <SubmitButton size="36" onClick={onSubmit}>
        {buttonText}
      </SubmitButton>
    </form>
  );
}
