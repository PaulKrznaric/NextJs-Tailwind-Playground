// pages/index.tsx
import SubmitButton from "../components/Form/SubmitButton";

export default function () {
  return (
    <div class="flex flex-col items-center">
      <h1 class="bold text-4xl text-center"> Welcome to my NextJS Webpage </h1>
      <SubmitButton
        className="text-slate-200 bg-blue-600 hover:bg-blue-700"
        onClick={() => {
          window.location.href = "/contact";
        }}
      >
        Contact Us
      </SubmitButton>
    </div>
  );
}
