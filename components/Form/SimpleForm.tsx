//components/Form/SimpleForm.tsx
import SubmitButton from "./SubmitButton";

export default function SimpleForm({ buttonText, onSubmit, children }) {
  return (
    <form class="flex flex-col items-center">
      <label class="text-xl">Name</label>
      <input class="border-2 border-black rounded-md p-2 m-2" type="text" />
      <label class="text-xl">Email</label>
      <input class="border-2 border-black rounded-md p-2 m-2" type="email" />
      <label class="text-xl">Message</label>
      <textarea class="border-2 border-black rounded-md p-2 m-2" />
      <SubmitButton size="36" onClick={onSubmit} children={undefined}>
        {buttonText}
      </SubmitButton>
    </form>
  );
}
